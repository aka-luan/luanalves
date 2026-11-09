import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

declare global {
  interface Window {
    __landingMotionCleanup__?: () => void;
  }
}

gsap.registerPlugin(ScrollTrigger);

const ROOT_SELECTOR = '[data-page="home"]';
const TWEENED_NAV_VARS = new Set([
  '--nav-width',
  '--nav-margin-top',
  '--nav-padding-block',
  '--nav-padding-inline',
]);

function createHeaderController({
  nav,
  hero,
  brandStack,
  brandLabel,
  enableAnimatedTopState,
  reduceMotion,
}: {
  nav: HTMLElement;
  hero: HTMLElement | null;
  brandStack: HTMLElement | null;
  brandLabel: HTMLElement | null;
  enableAnimatedTopState: boolean;
  reduceMotion: boolean;
}) {
  const getTopVars = (): gsap.TweenVars => ({
    '--nav-width': `${window.innerWidth}px`,
    '--nav-max-width': 'none',
    '--nav-margin-top': '0rem',
    '--nav-padding-block': '0.95rem',
    '--nav-padding-inline': '1.15rem',
    '--nav-bg': 'rgba(19, 19, 19, 0)',
    '--nav-border': 'rgba(77, 70, 58, 0)',
    '--nav-shadow': '0 0 0 rgba(0, 0, 0, 0)',
    '--nav-radius-local': '0px',
    '--nav-blur': '0px',
  });
  const getCompactVars = (): gsap.TweenVars => ({
    '--nav-width': `${Math.min(window.innerWidth - 40, 1020)}px`,
    '--nav-max-width': 'none',
    '--nav-margin-top': '0.55rem',
    '--nav-padding-block': '0.58rem',
    '--nav-padding-inline': '0.92rem',
    '--nav-bg': 'rgba(14, 14, 14, 0.94)',
    '--nav-border': 'rgba(77, 70, 58, 0.28)',
    '--nav-shadow': '0 14px 28px rgba(0, 0, 0, 0.22)',
    '--nav-radius-local': '0px',
    '--nav-blur': '18px',
  });

  const fullBrandWidth =
    (brandLabel?.scrollWidth ?? brandStack?.scrollWidth ?? 0) + 6;
  const brandText = brandLabel?.textContent?.trim() ?? '';
  const shortBrandText = brandText.split(/\s+/)[0] ?? brandText;

  const getShortBrandWidth = () => {
    if (
      !brandLabel?.firstChild ||
      brandLabel.firstChild.nodeType !== Node.TEXT_NODE
    ) {
      return fullBrandWidth;
    }

    const range = document.createRange();
    range.setStart(brandLabel.firstChild, 0);
    range.setEnd(brandLabel.firstChild, shortBrandText.length);
    return (
      (Math.ceil(range.getBoundingClientRect().width) || fullBrandWidth) + 1
    );
  };

  const shortBrandWidth = getShortBrandWidth();
  let currentMode: 'top' | 'compact' = 'top';
  const isMenuOpen = () => nav.classList.contains('is-menu-open');

  const setBrandState = (mode: 'full' | 'short', immediate = false) => {
    if (!brandStack) {
      return;
    }

    const targetWidth = mode === 'full' ? fullBrandWidth : shortBrandWidth;

    if (immediate || reduceMotion) {
      gsap.set(brandStack, { width: targetWidth });
      return;
    }

    gsap.to(brandStack, {
      width: targetWidth,
      duration: 0.25,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  const applyState = (mode: 'top' | 'compact', immediate = false) => {
    currentMode = mode;

    if (isMenuOpen()) {
      return;
    }

    const shouldUseTop = mode === 'top' && enableAnimatedTopState;
    const navVars = shouldUseTop ? getTopVars() : getCompactVars();

    nav.classList.toggle('is-scrolled', !shouldUseTop);

    if (immediate || reduceMotion) {
      gsap.set(nav, navVars);
      setBrandState(shouldUseTop ? 'full' : 'short', true);
      return;
    }

    // Animating backdrop blur repaints everything behind the nav on every frame.
    // Swap it while the nav background is near-opaque: after compacting, before expanding.
    const { '--nav-blur': navBlur, ...rest } = navVars;
    // Only geometry needs tweening; .is-scrolled transitions background, border and shadow in CSS.
    const animatedVars: gsap.TweenVars = {};
    const instantVars: gsap.TweenVars = {};
    for (const [key, value] of Object.entries(rest)) {
      (TWEENED_NAV_VARS.has(key) ? animatedVars : instantVars)[key] = value;
    }
    gsap.set(nav, { ...instantVars, '--nav-blur': shouldUseTop ? navBlur : '0px' });
    gsap.to(nav, {
      ...animatedVars,
      duration: 0.25,
      ease: 'power2.inOut',
      overwrite: 'auto',
      onComplete: () => gsap.set(nav, { '--nav-blur': navBlur }),
    });

    setBrandState(shouldUseTop ? 'full' : 'short');
  };

  gsap.set(brandLabel, { autoAlpha: 1, y: 0 });
  gsap.set(brandStack, { width: fullBrandWidth || 'auto' });

  if (!hero) {
    applyState('compact', true);
    return () => {
      nav.classList.remove('is-scrolled');
      gsap.set([brandStack, brandLabel].filter(Boolean), { clearProps: 'all' });
    };
  }

  const compactStart = Math.max(hero.offsetHeight * 0.26, 120);
  const shouldStartCompact = window.scrollY > compactStart;
  applyState(shouldStartCompact ? 'compact' : 'top', true);

  if (!enableAnimatedTopState) {
    const handleResize = () => applyState(currentMode, true);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      nav.classList.remove('is-scrolled');
      gsap.set([brandStack, brandLabel].filter(Boolean), { clearProps: 'all' });
    };
  }

  const handleResize = () => applyState(currentMode, true);
  window.addEventListener('resize', handleResize);

  const trigger = ScrollTrigger.create({
    trigger: hero,
    start: () => `top top-=${compactStart}`,
    onEnter: () => applyState('compact'),
    onLeaveBack: () => applyState('top'),
  });

  return () => {
    window.removeEventListener('resize', handleResize);
    trigger.kill();
    nav.classList.remove('is-scrolled');
    gsap.set([brandStack, brandLabel].filter(Boolean), { clearProps: 'all' });
  };
}

export function cleanupLandingMotion() {
  window.__landingMotionCleanup__?.();
}

export function initLandingMotion() {
  if (typeof window === 'undefined') {
    return;
  }

  cleanupLandingMotion();

  const root = document.querySelector(ROOT_SELECTOR);
  const nav = root?.querySelector<HTMLElement>('[data-motion-nav]');
  if (!root || !nav || !document.documentElement.classList.contains('motion-enabled')) {
    return;
  }

  const hero = root.querySelector<HTMLElement>('[data-motion="hero"]');
  const brandStack = root.querySelector<HTMLElement>('[data-brand-stack]');
  const brandLabel = root.querySelector<HTMLElement>('[data-brand-label]');

  let cleanupMatchMedia = () => {};
  const context = gsap.context(() => {
    const mm = gsap.matchMedia();
    cleanupMatchMedia = () => mm.revert();

    mm.add(
      {
        isDesktop: '(min-width: 961px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (media) => {
        const { isDesktop, reduceMotion } = media.conditions as {
          isDesktop: boolean;
          reduceMotion: boolean;
        };

        return createHeaderController({
          nav,
          hero,
          brandStack,
          brandLabel,
          enableAnimatedTopState: isDesktop,
          reduceMotion,
        });
      },
    );
  }, root);

  window.__landingMotionCleanup__ = () => {
    cleanupMatchMedia();
    context.revert();
    nav?.classList.remove('is-scrolled');
    delete window.__landingMotionCleanup__;
  };
}
