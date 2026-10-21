import { afterEach, expect, it, vi } from 'vitest';
import { initInsightPost } from './insight-post';
const motion = vi.hoisted(() => ({ set: vi.fn(), revert: vi.fn() }));
vi.mock('gsap', () => ({ default: {
  registerPlugin: vi.fn(), set: motion.set, to: vi.fn(),
  context: (setup: () => void) => { setup(); return { revert: motion.revert }; },
} }));
vi.mock('gsap/ScrollTrigger', () => ({ ScrollTrigger: { refresh: vi.fn() } }));
afterEach(() => { document.body.innerHTML = ''; document.documentElement.className = ''; vi.unstubAllGlobals(); vi.clearAllMocks(); });
it('keeps the article title, copy, visual, and visible CTA available during animation boot', () => {
  vi.stubGlobal('matchMedia', () => ({ matches: false }));
  document.documentElement.className = 'motion-enabled';
  document.body.innerHTML = '<main data-insight-post><nav class="post-breadcrumb">Início</nav><header class="post-hero"><div class="post-hero__copy"><p class="post-eyebrow">SEO</p><h1>Prazos</h1><p>Resumo</p><div class="post-meta"><span>Data</span></div></div><figure class="post-hero__visual"><img></figure></header><a class="post-whatsapp">Orçamento</a><section class="author-card">Autor</section></main>';
  const author = document.querySelector('.author-card')!;
  author.getBoundingClientRect = () => ({ top: window.innerHeight + 100 }) as DOMRect;
  const cleanup = initInsightPost();
  const hiddenTargets = motion.set.mock.calls.filter(([, vars]) => vars.autoAlpha === 0)
    .flatMap(([targets]) => Array.isArray(targets) ? targets : [targets]);
  expect(hiddenTargets).toEqual([author]);
  cleanup();
  expect(motion.revert).toHaveBeenCalledOnce();
});
