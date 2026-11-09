import { neon } from "@neondatabase/serverless";
import { readFile } from "node:fs/promises";
if (!process.env.DATABASE_URL)
  throw new Error("Configure DATABASE_URL no ambiente do servidor.");
const sql = neon(process.env.DATABASE_URL);
const source = await readFile(
  new URL("./db/briefings.sql", import.meta.url),
  "utf8",
);
const statements = source
  .replace(/^--.*$/gm, "")
  .split(";")
  .map((s) => s.trim())
  .filter(Boolean);
try {
  await sql.transaction(statements.map((statement) => sql.query(statement)));
  console.log("Tabelas de briefing configuradas.");
} catch {
  throw new Error(
    "Não foi possível configurar as tabelas. Verifique a conexão e as permissões do banco.",
  );
}
