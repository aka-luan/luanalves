// @vitest-environment node
import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { expect, it } from 'vitest';

it('keeps every responsive candidate resolvable from root and nested HTML', () => {
  const fixture = mkdtempSync(join(tmpdir(), 'luanalves-assets-'));
  try {
    mkdirSync(join(fixture, 'dist/insights/article'), { recursive: true });
    const html = `<link imagesrcset="/_astro/small.webp 400w, /_astro/large.webp 960w">
      <img src='/_astro/large.webp' srcset='/_astro/small.webp 400w, /_astro/large.webp 960w, /assets/original.webp 1448w'>`;
    for (const file of ['index.html', 'insights/article/index.html']) {
      writeFileSync(join(fixture, 'dist', file), html);
    }
    execFileSync(process.execPath, [resolve('scripts/patch-build-assets.mjs')], { cwd: fixture });
    for (const [file, prefix] of [['index.html', './_astro/'], ['insights/article/index.html', '../../_astro/']]) {
      const output = readFileSync(join(fixture, 'dist', file), 'utf8');
      expect(output).not.toMatch(/['"\s]\/_astro\//);
      expect(output.match(new RegExp(prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'))).toHaveLength(5);
      expect(output).toContain('/assets/original.webp 1448w');
    }
  } finally {
    rmSync(fixture, { recursive: true, force: true });
  }
});
