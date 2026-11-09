// @vitest-environment node
// Opt in only: RUN_BRIEFING_DB_TEST=1 node --env-file=.env.local node_modules/vitest/vitest.mjs run src/lib/briefing.integration.test.ts
import { it, expect } from "vitest";
import { createHmac, randomUUID } from "node:crypto";
import type { IncomingMessage, ServerResponse } from "node:http";
import { neon } from "@neondatabase/serverless";
import handler from "../../api/briefings";
import { sampleBriefing } from "./briefing.fixture";

it.skipIf(process.env.RUN_BRIEFING_DB_TEST !== "1")(
  "persists in Neon, deduplicates concurrent retries, rejects changed payload, then removes its test data",
  async () => {
    const connection = process.env.DATABASE_URL;
    if (!connection)
      throw new Error("Configure a conexão privada para o teste.");
    const sql = neon(connection),
      key = randomUUID(),
      ip = `briefing-test-${randomUUID()}`;
    const fingerprint = createHmac(
      "sha256",
      process.env.BRIEFING_RATE_SECRET || connection,
    )
      .update(ip)
      .digest("hex");
    const data = sampleBriefing();
    async function send() {
      const req = {
        method: "POST",
        headers: {
          origin: process.env.BRIEFING_ORIGIN || "https://luanalves.com.br",
          "content-type": "application/json",
          "x-vercel-forwarded-for": ip,
        },
        socket: { remoteAddress: "127.0.0.1" },
        async *[Symbol.asyncIterator]() {
          yield Buffer.from(JSON.stringify({ key, website: "", data }));
        },
      } as unknown as IncomingMessage;
      let status = 0,
        body = "";
      const res = {
        setHeader: () => {},
        set statusCode(s: number) {
          status = s;
        },
        end: (v: string) => {
          body = v;
        },
      } as unknown as ServerResponse;
      await handler(req, res);
      return { status, body: JSON.parse(body) };
    }
    try {
      const [a, b] = await Promise.all([send(), send()]);
      expect(a.status).toBe(200);
      expect(b.status).toBe(200);
      expect(a.body.id).toBe(b.body.id);
      const rows =
        await sql`SELECT id,data FROM briefings WHERE submission_key=${key}`;
      expect(rows).toHaveLength(1);
      expect(rows[0].id).toBe(a.body.id);
      expect(rows[0].data.schemaVersion).toBe("1.0");
      expect(rows[0].data.contact.siteWhatsapp).toBe("5591999990000");
      data.business.name = "Alteração depois do envio";
      expect((await send()).status).toBe(409);
    } finally {
      await sql`DELETE FROM briefings WHERE submission_key=${key}`;
      await sql`DELETE FROM briefing_rate_limits WHERE fingerprint=${fingerprint}`;
    }
  },
  30000,
);
