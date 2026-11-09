// @vitest-environment node
import { beforeEach, describe, it, expect, vi } from "vitest";
import type { IncomingMessage, ServerResponse } from "node:http";
import { randomUUID } from "node:crypto";
import { sampleBriefing } from "./briefing.fixture";
const { query } = vi.hoisted(() => ({ query: vi.fn() }));
vi.mock("@neondatabase/serverless", () => ({ neon: () => query }));
import handler from "../../api/briefings";

async function send(
  body: unknown,
  options: { origin?: string; method?: string; preParsed?: boolean } = {},
) {
  const req = {
    method: options.method ?? "POST",
    headers: {
      origin: options.origin ?? "https://luanalves.com.br",
      "content-type": "application/json",
    },
    socket: { remoteAddress: "127.0.0.1" },
    ...(options.preParsed ? { body } : {}),
    async *[Symbol.asyncIterator]() {
      yield Buffer.from(JSON.stringify(body));
    },
  } as unknown as IncomingMessage;
  let status = 200,
    output = "";
  const headers: Record<string, string> = {};
  const res = {
    setHeader: (k: string, v: string) => {
      headers[k] = v;
    },
    set statusCode(v: number) {
      status = v;
    },
    end: (s: string) => {
      output = s;
    },
  } as unknown as ServerResponse;
  await handler(req, res);
  return { status, body: JSON.parse(output), headers };
}
describe("briefing endpoint", () => {
  beforeEach(() => {
    vi.stubEnv("DATABASE_URL", "postgresql://test");
    query.mockReset();
  });
  it("succeeds only after persistence and returns the saved ID", async () => {
    const key = randomUUID();
    let saved: Record<string, unknown> | undefined;
    query.mockImplementation(
      async (_strings: TemplateStringsArray, ...args: unknown[]) => {
        if (args.length === 1) return [{ attempts: 1 }];
        saved = JSON.parse(args[4] as string);
        return [{ id: args[0], payload_hash: args[2] }];
      },
    );
    const response = await send(
      { key, website: "", data: sampleBriefing() },
      { preParsed: true },
    );
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(saved?.id);
    expect(saved?.schemaVersion).toBe("1.0");
    expect(saved?.status).toBe("received");
    expect(saved?.assets).toEqual([]);
  });
  it("returns an error when the database fails", async () => {
    query.mockRejectedValue(new Error("database down"));
    expect(
      (await send({ key: randomUUID(), website: "", data: sampleBriefing() }))
        .status,
    ).toBe(503);
  });
  it("rejects invalid input, honeypot, wrong origin, method and oversized bodies before database access", async () => {
    const data = { key: randomUUID(), website: "", data: sampleBriefing() };
    expect((await send({ ...data, website: "spam" })).status).toBe(422);
    expect((await send({ ...data, data: {} })).status).toBe(422);
    expect((await send(data, { origin: "https://evil.example" })).status).toBe(
      403,
    );
    expect((await send(data, { method: "GET" })).status).toBe(405);
    expect((await send({ x: "a".repeat(33000) })).status).toBe(413);
    expect(query).not.toHaveBeenCalled();
  });
  it("limits repeated requests in the shared database", async () => {
    query.mockResolvedValue([{ attempts: 11 }]);
    expect(
      (await send({ key: randomUUID(), website: "", data: sampleBriefing() }))
        .status,
    ).toBe(429);
    expect(query).toHaveBeenCalledTimes(1);
  });
  it("returns the original ID for a retry and rejects key reuse with changed answers", async () => {
    const id = randomUUID();
    let hash = "";
    query.mockImplementation(
      async (_strings: TemplateStringsArray, ...args: unknown[]) => {
        if (args.length === 1) return [{ attempts: 1 }];
        hash ||= args[2] as string;
        return [{ id, payload_hash: hash }];
      },
    );
    const body = { key: randomUUID(), website: "", data: sampleBriefing() };
    expect((await send(body)).body.id).toBe(id);
    expect((await send(body)).body.id).toBe(id);
    body.data.business.name = "Alterado";
    expect((await send(body)).status).toBe(409);
  });
  it("fails clearly when configuration is missing", async () => {
    vi.stubEnv("DATABASE_URL", "");
    expect((await send({})).status).toBe(503);
    expect(query).not.toHaveBeenCalled();
  });
});
