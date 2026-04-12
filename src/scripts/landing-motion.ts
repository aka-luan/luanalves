import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

declare global {
  interface Window {
    __landingMotionCleanup__?: () => void;
  }
}

gsap.registerPlugin(ScrollTrigger);

const ROOT_SELECTOR = '[data-page="home"]';
const LOADER_SESSION_KEY = 'luan-loader-seen';

function revealNow(elements: Iterable<Element>) {
  for (const element of elements) {
    element.removeAttribute('data-motion-hidden');
    gsap.set(element, {
      clearProps: 'all',
    });
  }
}

function primeHiddenState(elements: Element[], isMobile: boolean) {
  const hiddenStateMap: Record<string, gsap.TweenVars> = {
    nav: { autoAlpha: 0, y: -22 },
    'y-sm': { autoAlpha: 0, y: 24 },
    'y-md': { autoAlpha: 0, y: 36 },
    'y-lg': { autoAlpha: 0, y: 48 },
    'y-card': {
      autoAlpha: 0,
      y: 52,
      rotationX: -8,
      transformOrigin: 'center top',
    },
    scale: {
      autoAlpha: 0,
      scale: 0.92,
      transformOrigin: 'center center',
    },
    'scale-x': {
      scaleX: 0,
      transformOrigin: 'center center',
    },
  };

  elements.forEach((element) => {
    const key = element.getAttribute('data-motion-hidden');
    if (!key) {
      return;
    }

    const directionalState =
      key === 'x-left'
        ? { autoAlpha: 0, x: isMobile ? 0 : -48, y: isMobile ? 28 : 0 }
        : key === 'x-right'
          ? { autoAlpha: 0, x: isMobile ? 0 : 48, y: isMobile ? 28 : 0 }
          : null;

    const vars = directionalState ?? hiddenStateMap[key];

    if (vars) {
      gsap.set(element, {
        ...vars,
        willChange: 'transform, opacity',
      });
    }

    element.removeAttribute('data-motion-hidden');
  });
}

function createSectionReveal({
  section,
  targets,
  start,
  setup,
}: {
  section: Element | null;
  targets: Element[];
  start: string;
  setup: (timeline: gsap.core.Timeline) => void;
}) {
  if (!section || targets.length === 0) {
    return;
  }

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start,
      once: true,
    },
  });

  setup(timeline);
}

function getShouldShowLoader() {
  try {
    return sessionStorage.getItem(LOADER_SESSION_KEY) !== 'true';
  } catch {
    return true;
  }
}

function markLoaderSeen() {
  try {
    sessionStorage.setItem(LOADER_SESSION_KEY, 'true');
  } catch {
    return;
  }
}

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
      duration: 0.42,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  const applyState = (mode: 'top' | 'compact', immediate = false) => {
    currentMode = mode;
    const shouldUseTop = mode === 'top' && enableAnimatedTopState;
    const navVars = shouldUseTop ? getTopVars() : getCompactVars();

    nav.classList.toggle('is-scrolled', !shouldUseTop);

    if (immediate || reduceMotion) {
      gsap.set(nav, navVars);
      setBrandState(shouldUseTop ? 'full' : 'short', true);
      return;
    }

    gsap.to(nav, {
      ...navVars,
      duration: 0.92,
      ease: 'power2.inOut',
      overwrite: 'auto',
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
  if (!root) {
    return;
  }

  const html = document.documentElement;
  const body = document.body;
  const nav = root.querySelector<HTMLElement>('[data-motion-nav]');
  const hero = root.querySelector<HTMLElement>('[data-motion="hero"]');
  const brandStack = root.querySelector<HTMLElement>('[data-brand-stack]');
  const brandLabel = root.querySelector<HTMLElement>('[data-brand-label]');
  const loader = root.querySelector<HTMLElement>('[data-loader]');
  const loaderBrand = root.querySelector<HTMLElement>('[data-loader-brand]');
  const loaderLabel = root.querySelector<HTMLElement>('[data-loader-label]');
  const loaderProgress = root.querySelector<HTMLElement>(
    '[data-loader-progress]',
  );
  const loaderProgressFill = root.querySelector<HTMLElement>(
    '[data-loader-progress-fill]',
  );
  const allHidden = Array.from(root.querySelectorAll('[data-motion-hidden]'));

  if (!html.classList.contains('motion-enabled')) {
    if (loader) {
      loader.setAttribute('hidden', '');
    }
    revealNow(allHidden);
    return;
  }

  let cleanupMatchMedia = () => {};
  let context!: gsap.Context;

  context = gsap.context(() => {
    const mm = gsap.matchMedia();
    cleanupMatchMedia = () => mm.revert();

    mm.add(
      {
        isDesktop: '(min-width: 961px)',
        isMobile: '(max-width: 960px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (media) => {
        const { isDesktop, isMobile, reduceMotion } = media.conditions as {
          isDesktop: boolean;
          isMobile: boolean;
          reduceMotion: boolean;
        };

        if (reduceMotion) {
          loader?.setAttribute('hidden', '');
          revealNow(allHidden);
          return nav
            ? createHeaderController({
                nav,
                hero,
                brandStack,
                brandLabel,
                enableAnimatedTopState: isDesktop,
                reduceMotion: true,
              })
            : undefined;
        }

        const shouldShowLoader = Boolean(loader) && getShouldShowLoader();

        primeHiddenState(allHidden, isMobile);

        const heroEyebrow = root.querySelector<HTMLElement>(
          '[data-motion-hero-eyebrow]',
        );
        const heroTitle = root.querySelector<HTMLElement>(
          '[data-motion-hero-title]',
        );
        const heroCopy = root.querySelector<HTMLElement>(
          '[data-motion-hero-copy]',
        );
        const heroActions = Array.from(
          root.querySelectorAll('[data-motion-hero-actions] > *'),
        );
        const heroGlow = root.querySelector<HTMLElement>('[data-motion-glow]');
        const trustItems = Array.from(
          root.querySelectorAll('[data-motion-item="trust"]'),
        );
        const servicesSection = root.querySelector(
          '[data-motion-section="services"]',
        );
        const servicesHeadings = Array.from(
          servicesSection?.querySelectorAll('[data-motion-heading]') ?? [],
        );
        const serviceCards = Array.from(
          root.querySelectorAll('[data-motion-item="service"]'),
        );
        const portfolioSection = root.querySelector(
          '[data-motion-section="portfolio"]',
        );
        const portfolioHeadings = Array.from(
          portfolioSection?.querySelectorAll('[data-motion-heading]') ?? [],
        );
        const projectCards = Array.from(
          root.querySelectorAll('[data-motion-item="project"]'),
        );
        const projectImages = Array.from(
          root.querySelectorAll(
            '[data-motion-item="project"] [data-motion-image]',
          ),
        );
        const whySection = root.querySelector('[data-motion-section="why"]');
        const whyHeadings = Array.from(
          whySection?.querySelectorAll('[data-motion-heading]') ?? [],
        );
        const whyCopy = Array.from(
          whySection?.querySelectorAll('[data-motion-copy]') ?? [],
        );
        const reasonItems = Array.from(
          root.querySelectorAll('[data-motion-item="reason"]'),
        );
        const experiencePanel = Array.from(
          root.querySelectorAll('[data-motion-experience]'),
        );
        const ctaSection = root.querySelector('[data-motion-section="cta"]');
        const ctaPanel = Array.from(
          root.querySelectorAll('[data-motion-panel]'),
        );
        const ctaAccent = Array.from(
          root.querySelectorAll('[data-motion-accent]'),
        );
        const ctaHeadings = Array.from(
          ctaSection?.querySelectorAll('[data-motion-heading]') ?? [],
        );
        const ctaCopy = Array.from(
          ctaSection?.querySelectorAll('[data-motion-copy]') ?? [],
        );
        const ctaButton = Array.from(
          root.querySelectorAll('[data-motion-button]'),
        );
        const footerItems = Array.from(
          root.querySelectorAll('[data-motion-item="footer"]'),
        );

        gsap.set(projectImages, {
          scale: 1.14,
          autoAlpha: 0.72,
          willChange: 'transform, opacity',
        });

        const introTargets = [
          nav,
          heroEyebrow,
          heroTitle,
          heroCopy,
          ...heroActions,
        ].filter(Boolean);

        const createHeroIntro = () => {
          return gsap
            .timeline({
              paused: true,
              defaults: {
                duration: 0.95,
                ease: 'power3.out',
              },
            })
            .to(
              nav,
              {
                autoAlpha: 1,
                y: 0,
                clearProps: 'transform,opacity,willChange',
              },
              0,
            )
            .to(
              heroEyebrow,
              {
                autoAlpha: 1,
                y: 0,
                clearProps: 'transform,opacity,willChange',
              },
              0.16,
            )
            .to(
              heroTitle,
              {
                autoAlpha: 1,
                y: 0,
                clearProps: 'transform,opacity,willChange',
              },
              0.3,
            )
            .to(
              heroCopy,
              {
                autoAlpha: 1,
                y: 0,
                clearProps: 'transform,opacity,willChange',
              },
              0.46,
            )
            .to(
              heroActions,
              {
                autoAlpha: 1,
                y: 0,
                stagger: 0.1,
                clearProps: 'transform,opacity,willChange',
              },
              0.58,
            );
        };

        const intro = createHeroIntro();

        if (loader) {
          if (shouldShowLoader) {
            body.classList.add('is-loader-active');
            loader.removeAttribute('hidden');
            loader.setAttribute('aria-hidden', 'false');

            gsap.set(loader, { autoAlpha: 1, y: 0 });
            gsap.set([loaderBrand, loaderLabel], {
              autoAlpha: 0,
              y: 22,
              willChange: 'transform, opacity',
            });
            gsap.set(loaderProgress, {
              autoAlpha: 0,
              y: 18,
              willChange: 'transform, opacity',
            });
            gsap.set(loaderProgressFill, {
              scaleX: 0,
              transformOrigin: 'left center',
              willChange: 'transform',
            });

            const loaderTimeline = gsap.timeline({
              defaults: {
                ease: 'power3.out',
              },
              onComplete: () => {
                loader.setAttribute('hidden', '');
                loader.setAttribute('aria-hidden', 'true');
                body.classList.remove('is-loader-active');
                markLoaderSeen();
              },
            });

            loaderTimeline
              .to(loaderLabel, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.08)
              .to(loaderBrand, { autoAlpha: 1, y: 0, duration: 0.72 }, 0.12)
              .to(loaderProgress, { autoAlpha: 1, y: 0, duration: 0.46 }, 0.22)
              .to(
                loaderProgressFill,
                { scaleX: 1, duration: 0.88, ease: 'power2.inOut' },
                0.34,
              )
              .to(loaderLabel, { autoAlpha: 0, y: -12, duration: 0.34 }, 1.08)
              .to(
                loaderProgress,
                { autoAlpha: 0, y: -12, duration: 0.34 },
                1.14,
              )
              .to(loaderBrand, { autoAlpha: 0, y: -24, duration: 0.5 }, 1.16)
              .to(
                loader,
                {
                  autoAlpha: 0,
                  yPercent: -8,
                  duration: 0.54,
                },
                1.28,
              )
              .add(() => intro.play(0), 1.08);
          } else {
            loader.setAttribute('hidden', '');
            loader.setAttribute('aria-hidden', 'true');
            body.classList.remove('is-loader-active');
            intro.play(0);
          }
        } else {
          intro.play(0);
        }

        const cleanupHeader =
          nav &&
          createHeaderController({
            nav,
            hero,
            brandStack,
            brandLabel,
            enableAnimatedTopState: isDesktop,
            reduceMotion: false,
          });

        if (hero && isDesktop) {
          gsap.to(hero, {
            '--grid-shift-x': '18px',
            '--grid-shift-y': '34px',
            ease: 'none',
            scrollTrigger: {
              trigger: hero,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.2,
            },
          });

          gsap.to(heroGlow, {
            yPercent: -12,
            scale: 1.08,
            ease: 'none',
            scrollTrigger: {
              trigger: hero,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          });
        }

        createSectionReveal({
          section: root.querySelector('[data-motion-section="trust"]'),
          targets: trustItems,
          start: 'top 82%',
          setup: (timeline) => {
            timeline.to(trustItems, {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: 'power3.out',
              clearProps: 'transform,opacity,willChange',
            });
          },
        });

        createSectionReveal({
          section: servicesSection,
          targets: [...servicesHeadings, ...serviceCards],
          start: 'top 74%',
          setup: (timeline) => {
            timeline
              .to(servicesHeadings, {
                autoAlpha: 1,
                y: 0,
                duration: 0.86,
                stagger: 0.1,
                ease: 'power3.out',
                clearProps: 'transform,opacity,willChange',
              })
              .to(
                serviceCards,
                {
                  autoAlpha: 1,
                  y: 0,
                  rotationX: 0,
                  duration: 0.95,
                  stagger: 0.12,
                  ease: 'power3.out',
                  clearProps: 'transform,opacity,willChange',
                },
                0.14,
              );
          },
        });

        createSectionReveal({
          section: portfolioSection,
          targets: [...portfolioHeadings, ...projectCards],
          start: 'top 76%',
          setup: (timeline) => {
            timeline
              .to(portfolioHeadings, {
                autoAlpha: 1,
                y: 0,
                duration: 0.86,
                stagger: 0.1,
                ease: 'power3.out',
                clearProps: 'transform,opacity,willChange',
              })
              .to(
                projectCards,
                {
                  autoAlpha: 1,
                  x: 0,
                  y: 0,
                  duration: 1,
                  stagger: 0.14,
                  ease: 'power3.out',
                  clearProps: 'transform,opacity,willChange',
                },
                0.14,
              )
              .to(
                projectImages,
                {
                  scale: 1,
                  autoAlpha: 1,
                  duration: 1.1,
                  stagger: 0.14,
                  ease: 'power3.out',
                  clearProps: 'transform,opacity,willChange',
                },
                0.16,
              );
          },
        });

        createSectionReveal({
          section: whySection,
          targets: [
            ...whyHeadings,
            ...whyCopy,
            ...reasonItems,
            ...experiencePanel,
          ],
          start: 'top 72%',
          setup: (timeline) => {
            timeline
              .to([...whyHeadings, ...whyCopy], {
                autoAlpha: 1,
                y: 0,
                duration: 0.88,
                stagger: 0.1,
                ease: 'power3.out',
                clearProps: 'transform,opacity,willChange',
              })
              .to(
                reasonItems,
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.82,
                  stagger: 0.08,
                  ease: 'power3.out',
                  clearProps: 'transform,opacity,willChange',
                },
                0.18,
              )
              .to(
                experiencePanel,
                {
                  autoAlpha: 1,
                  scale: 1,
                  duration: 0.96,
                  ease: 'power3.out',
                  clearProps: 'transform,opacity,willChange',
                },
                0.24,
              );
          },
        });

        createSectionReveal({
          section: ctaSection,
          targets: [
            ...ctaPanel,
            ...ctaAccent,
            ...ctaHeadings,
            ...ctaCopy,
            ...ctaButton,
          ],
          start: 'top 78%',
          setup: (timeline) => {
            timeline
              .to(ctaPanel, {
                autoAlpha: 1,
                y: 0,
                duration: 0.96,
                ease: 'power3.out',
                clearProps: 'transform,opacity,willChange',
              })
              .to(
                ctaAccent,
                {
                  scaleX: 1,
                  duration: 0.72,
                  ease: 'power3.out',
                  clearProps: 'transform,willChange',
                },
                0.08,
              )
              .to(
                [...ctaHeadings, ...ctaCopy],
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.86,
                  stagger: 0.1,
                  ease: 'power3.out',
                  clearProps: 'transform,opacity,willChange',
                },
                0.14,
              )
              .to(
                ctaButton,
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.9,
                  ease: 'power3.out',
                  clearProps: 'transform,opacity,willChange',
                },
                0.24,
              );
          },
        });

        createSectionReveal({
          section: root.querySelector('[data-motion-section="footer"]'),
          targets: footerItems,
          start: 'top 90%',
          setup: (timeline) => {
            timeline.to(footerItems, {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.08,
              ease: 'power2.out',
              clearProps: 'transform,opacity,willChange',
            });
          },
        });

        ScrollTrigger.refresh();

        return () => {
          cleanupHeader?.();
          nav?.classList.remove('is-scrolled');
          body.classList.remove('is-loader-active');
          loader?.setAttribute('aria-hidden', 'true');
          gsap.set(
            [
              ...introTargets,
              loaderBrand,
              loaderLabel,
              loaderProgress,
              loaderProgressFill,
            ],
            {
              clearProps: 'willChange',
            },
          );
        };
      },
    );
  }, root);

  window.__landingMotionCleanup__ = () => {
    cleanupMatchMedia();
    context.revert();
    nav?.classList.remove('is-scrolled');
    body.classList.remove('is-loader-active');
    delete window.__landingMotionCleanup__;
  };
}
