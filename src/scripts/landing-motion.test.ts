import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanupLandingMotion, initLandingMotion } from './landing-motion';

const motion = vi.hoisted(() => ({
  set: vi.fn(), revert: vi.fn(), mediaRevert: vi.fn(), reduce: false,
}));
vi.mock('gsap', () => ({ default: {
  registerPlugin: vi.fn(), set: motion.set, to: vi.fn(),
  context: (setup: () => void) => { setup(); return { revert: motion.revert }; },
  matchMedia: () => ({
    revert: motion.mediaRevert,
    add: (_queries: unknown, setup: (media: unknown) => void) => setup({
      conditions: { isDesktop: true, reduceMotion: motion.reduce },
    }),
  }),
} }));
vi.mock('gsap/ScrollTrigger', () => ({ ScrollTrigger: { create: () => ({ kill: vi.fn() }) } }));

afterEach(() => {
  cleanupLandingMotion();
  document.body.innerHTML = '';
  document.documentElement.className = '';
  motion.reduce = false;
  vi.clearAllMocks();
});

function setup() {
  document.documentElement.className = 'motion-enabled';
  document.body.innerHTML = '<main data-page="home"><nav data-motion-nav></nav><section data-motion="hero"><h1>Título</h1></section><section id="below">Conteúdo abaixo</section></main>';
}

describe('landing motion', () => {
  it('never hides page content and reverts on cleanup', () => {
    for (const reduced of [false, true]) {
      setup();
      motion.reduce = reduced;
      initLandingMotion();
      expect(motion.set.mock.calls.some(([, vars]) => vars?.autoAlpha === 0)).toBe(false);
      cleanupLandingMotion();
      expect(motion.revert).toHaveBeenCalled();
      expect(motion.mediaRevert).toHaveBeenCalled();
      vi.clearAllMocks();
    }
  });

  it('does nothing when motion is disabled', () => {
    setup();
    document.documentElement.className = '';
    initLandingMotion();
    expect(motion.set).not.toHaveBeenCalled();
    cleanupLandingMotion();
    expect(motion.revert).not.toHaveBeenCalled();
  });
});
