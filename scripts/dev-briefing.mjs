// Load .env.local in the parent process so Vercel functions receive the same
// server environment as Astro. Never pass database credentials as CLI flags.
import { spawn } from "node:child_process";
const child = spawn("vercel", ["dev", "--listen", "3000"], {
  stdio: "inherit",
  env: { ...process.env, BRIEFING_ORIGIN: "http://localhost:3000" },
});
child.on("error", () => {
  console.error("Instale a CLI da Vercel para usar pnpm run dev:briefing.");
  process.exitCode = 1;
});
child.on("exit", (code) => {
  process.exitCode = code ?? 0;
});
for (const signal of ["SIGINT", "SIGTERM"])
  process.on(signal, () => child.kill(signal));
