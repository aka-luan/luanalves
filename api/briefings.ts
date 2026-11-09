import { createHash, createHmac, randomUUID } from "node:crypto";
import type { IncomingMessage, ServerResponse } from "node:http";
import { neon } from "@neondatabase/serverless";
import { submissionSchema, type BriefingRecord } from "../src/lib/briefing.js";

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  const reply = (status: number, body: unknown) => {
    res.statusCode = status;
    res.end(JSON.stringify(body));
  };
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return reply(405, { error: "Use o formulário para enviar." });
  }
  const origin = req.headers.origin;
  const allowed = process.env.BRIEFING_ORIGIN || "https://luanalves.com.br";
  if (origin !== allowed)
    return reply(403, { error: "Envie pelo formulário do site." });
  if (!req.headers["content-type"]?.startsWith("application/json"))
    return reply(415, { error: "Formato de envio inválido." });
  if (!process.env.DATABASE_URL)
    return reply(503, {
      error:
        "O recebimento está temporariamente indisponível. Suas respostas continuam aqui; tente novamente mais tarde.",
    });
  try {
    let size = 0;
    const chunks: Buffer[] = [];
    const preParsedBody = (req as IncomingMessage & { body?: unknown }).body;
    if (preParsedBody !== undefined) {
      const buffer = Buffer.from(
        typeof preParsedBody === "string"
          ? preParsedBody
          : JSON.stringify(preParsedBody),
      );
      size = buffer.length;
      if (size > 32768)
        return reply(413, {
          error: "As informações ultrapassam o limite de tamanho.",
        });
      chunks.push(buffer);
    } else
      for await (const chunk of req) {
        const buffer = Buffer.from(chunk);
        size += buffer.length;
        if (size > 32768)
          return reply(413, {
            error: "As informações ultrapassam o limite de tamanho.",
          });
        chunks.push(buffer);
      }
    let raw: unknown;
    try {
      raw = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    } catch {
      return reply(400, { error: "Não foi possível ler o envio." });
    }
    const parsed = submissionSchema.safeParse(raw);
    if (!parsed.success)
      return reply(422, {
        error: "Revise os campos indicados antes de enviar.",
        fields: parsed.error.issues.map((i) => ({
          path: i.path.join("."),
          message: i.message,
        })),
      });
    const { key, data } = parsed.data;
    const sql = neon(process.env.DATABASE_URL);
    // Vercel overwrites x-vercel-forwarded-for; never trust the client supplied x-forwarded-for.
    const ip = String(
      req.headers["x-vercel-forwarded-for"] ||
        req.socket.remoteAddress ||
        "unknown",
    )
      .split(",")[0]
      .trim();
    const fingerprint = createHmac(
      "sha256",
      process.env.BRIEFING_RATE_SECRET || process.env.DATABASE_URL,
    )
      .update(ip)
      .digest("hex");
    const hash = createHash("sha256")
      .update(JSON.stringify(data))
      .digest("hex");
    const rate =
      await sql`INSERT INTO briefing_rate_limits (fingerprint,window_start,attempts) VALUES (${fingerprint},now(),1)
      ON CONFLICT (fingerprint) DO UPDATE SET
      attempts = CASE WHEN briefing_rate_limits.window_start < now() - interval '1 hour' THEN 1 ELSE briefing_rate_limits.attempts + 1 END,
      window_start = CASE WHEN briefing_rate_limits.window_start < now() - interval '1 hour' THEN now() ELSE briefing_rate_limits.window_start END
      RETURNING attempts`;
    if (rate[0].attempts > 10) {
      res.setHeader("Retry-After", "3600");
      return reply(429, {
        error:
          "Muitos envios neste momento. Aguarde uma hora para tentar novamente.",
      });
    }
    const id = randomUUID();
    const createdAt = new Date().toISOString();
    const record: BriefingRecord = {
      ...data,
      schemaVersion: "1.0",
      id,
      createdAt,
      status: "received",
      assets: [],
    };
    // Unique key and one atomic statement protect concurrent retries, including lost responses.
    const saved =
      await sql`INSERT INTO briefings (id,submission_key,payload_hash,created_at,data)
      VALUES (${id},${key},${hash},${createdAt},${JSON.stringify(record)}::jsonb)
      ON CONFLICT (submission_key) DO UPDATE SET submission_key = EXCLUDED.submission_key
      RETURNING id, payload_hash`;
    if (saved[0].payload_hash !== hash)
      return reply(409, {
        error:
          "Este envio já foi recebido com outras informações. Recarregue apenas depois de guardar suas alterações.",
      });
    return reply(200, { id: saved[0].id });
  } catch {
    // Do not log payloads, connection strings or database errors containing personal data.
    return reply(503, {
      error:
        "Não foi possível salvar agora. Suas respostas continuam aqui. Tente novamente.",
    });
  }
}
