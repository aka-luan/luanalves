import fs from "node:fs";
import path from "node:path";

const viteChunkPath = path.resolve(
  "node_modules",
  "vite",
  "dist",
  "node",
  "chunks",
  "dep-Dq2t6Dq0.js"
);

if (!fs.existsSync(viteChunkPath)) {
  process.exit(0);
}

const source = fs.readFileSync(viteChunkPath, "utf8");
const replacement = `  safeRealpathSync = fs__default.realpathSync.native;`;
const execBlockPattern =
  /  exec\("net use", \(error, stdout\) => \{\r?\n[\s\S]*?\r?\n  \}\);/;

if (source.includes(replacement) && !execBlockPattern.test(source)) {
  process.exit(0);
}

fs.writeFileSync(viteChunkPath, source.replace(execBlockPattern, replacement));
