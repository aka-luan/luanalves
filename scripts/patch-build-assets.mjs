import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const astroDir = path.join(distDir, "_astro");

async function getHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        return getHtmlFiles(entryPath);
      }

      return entry.isFile() && entry.name.endsWith(".html") ? [entryPath] : [];
    })
  );

  return files.flat();
}

function getRelativeAstroPath(htmlFile) {
  const htmlDir = path.dirname(htmlFile);
  const relativePath = path.relative(htmlDir, astroDir).replaceAll("\\", "/");

  return relativePath.startsWith(".") ? `${relativePath}/` : `./${relativePath}/`;
}

function rewriteAssetUrls(html, assetBasePath) {
  return html.replaceAll('"/_astro/', `"${assetBasePath}`).replaceAll("'/_astro/", `'${assetBasePath}`);
}

async function main() {
  const distStats = await stat(distDir);

  if (!distStats.isDirectory()) {
    throw new Error("The dist directory was not found.");
  }

  const htmlFiles = await getHtmlFiles(distDir);

  await Promise.all(
    htmlFiles.map(async (htmlFile) => {
      const originalHtml = await readFile(htmlFile, "utf8");
      const assetBasePath = getRelativeAstroPath(htmlFile);
      const updatedHtml = rewriteAssetUrls(originalHtml, assetBasePath);

      if (updatedHtml !== originalHtml) {
        await writeFile(htmlFile, updatedHtml, "utf8");
      }
    })
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
