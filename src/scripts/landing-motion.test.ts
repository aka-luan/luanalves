import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanupLandingMotion, initLandingMotion } from './landing-motion';

const motion = vi.hoisted(() => ({
  set: vi.fn(), revert: vi.fn(), mediaRevert: vi.fn(), reduce: false,
}));
vi.mock('gsap', () => {
  const timeline = { to: vi.fn().mockReturnThis() };
  return { default: {
    registerPlugin: vi.fn(), set: motion.set, to: vi.fn(),
    timeline: () => timeline,
    context: (setup: () => void) => { setup(); return { revert: motion.revert }; },
    matchMedia: () => ({
      revert: motion.mediaRevert,
      add: (_queries: unknown, setup: (media: unknown) => void) => setup({
        conditions: { isDesktop: false, isMobile: true, reduceMotion: motion.reduce },
      }),
    }),
  } };
});
vi.mock('gsap/ScrollTrigger', () => ({ ScrollTrigger: { refresh: vi.fn(), create: () => ({ kill: vi.fn() }) } }));

afterEach(() => {
  cleanupLandingMotion();
  document.body.innerHTML = '';
  document.documentElement.className = '';
  motion.reduce = false;
  vi.clearAllMocks();
});

function setup() {
  document.documentElement.className = 'motion-enabled';
  document.body.innerHTML = '<main data-page="home"><section data-motion="hero"><h1 data-motion-hero-title data-motion-hidden="y-lg">Título</h1><a data-motion-hidden="y-sm">Orçamento</a></section><p id="visible" data-motion-hidden="y-sm">Visível</p><section data-motion-section="services"><article id="below" data-motion-item="service" data-motion-hidden="y-card">Conteúdo abaixo</article></section></main>';
  document.querySelector('#below')!.getBoundingClientRect = () => ({ top: window.innerHeight + 100 }) as DOMRect;
}

describe('initial rendering', () => {
  it('never primes hero or viewport content with an invisible state', () => {
    setup();
    initLandingMotion();
    const hiddenCalls = motion.set.mock.calls.filter(([, vars]) => vars?.autoAlpha === 0);
    expect(hiddenCalls.map(([target]) => target)).toEqual([document.querySelector('#below')]);
    expect(document.querySelector('h1')?.hasAttribute('data-motion-hidden')).toBe(false);
    expect(document.querySelector('a')?.hasAttribute('data-motion-hidden')).toBe(false);
    cleanupLandingMotion();
    expect(motion.revert).toHaveBeenCalled();
    expect(motion.mediaRevert).toHaveBeenCalled();
  });

  it('reveals everything when motion is disabled or reduced', () => {
    for (const reduced of [false, true]) {
      setup();
      motion.reduce = reduced;
      if (!reduced) document.documentElement.className = '';
      initLandingMotion();
      expect(document.querySelector('[data-motion-hidden]')).toBeNull();
      expect(motion.set.mock.calls.some(([, vars]) => vars?.autoAlpha === 0)).toBe(false);
      cleanupLandingMotion();
      vi.clearAllMocks();
    }
  });
});
