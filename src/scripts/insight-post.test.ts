import { afterEach, expect, it, vi } from 'vitest';
import { initInsightPost } from './insight-post';
afterEach(() => { document.body.innerHTML = ''; document.documentElement.className = ''; vi.unstubAllGlobals(); });
it('leaves the article, sidebar, and author card visible on boot', () => {
  vi.stubGlobal('matchMedia', () => ({ matches: false }));
  document.documentElement.className = 'motion-enabled';
  document.body.innerHTML = '<main data-insight-post><nav class="post-breadcrumb">Início</nav><header class="post-hero"><h1>Prazos</h1><figure class="post-hero__visual"><img></figure></header><a class="post-whatsapp">Orçamento</a><section class="author-card">Autor</section></main>';
  const cleanup = initInsightPost();
  expect(Array.from(document.querySelectorAll<HTMLElement>('[style]'))).toEqual([]);
  cleanup();
});
