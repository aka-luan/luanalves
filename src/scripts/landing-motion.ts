import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

declare global {
  interface Window {
    __landingMotionCleanup__?: () => void;
  }
}

gsap.registerPlugin(ScrollTrigger);

const ROOT_SELECTOR = '[data-page="home"]';

function revealNow(elements: Iterable<Element>) {
  for (const element of elements) {
    element.removeAttribute("data-motion-hidden");
    gsap.set(element, {
      clearProps: "all"
    });
  }
}

function primeHiddenState(elements: Element[], isMobile: boolean) {
  const hiddenStateMap: Record<string, gsap.TweenVars> = {
    nav: { autoAlpha: 0, y: -22 },
    "y-sm": { autoAlpha: 0, y: 24 },
    "y-md": { autoAlpha: 0, y: 36 },
    "y-lg": { autoAlpha: 0, y: 48 },
    "y-card": {
      autoAlpha: 0,
      y: 52,
      rotationX: -8,
      transformOrigin: "center top"
    },
    scale: {
      autoAlpha: 0,
      scale: 0.92,
      transformOrigin: "center center"
    },
    "scale-x": {
      scaleX: 0,
      transformOrigin: "center center"
    }
  };

  elements.forEach((element) => {
    const key = element.getAttribute("data-motion-hidden");
    if (!key) {
      return;
    }

    const directionalState =
      key === "x-left"
        ? { autoAlpha: 0, x: isMobile ? 0 : -48, y: isMobile ? 28 : 0 }
        : key === "x-right"
          ? { autoAlpha: 0, x: isMobile ? 0 : 48, y: isMobile ? 28 : 0 }
          : null;

    const vars = directionalState ?? hiddenStateMap[key];

    if (vars) {
      gsap.set(element, {
        ...vars,
        willChange: "transform, opacity"
      });
    }

    element.removeAttribute("data-motion-hidden");
  });
}

function createSectionReveal({
  section,
  targets,
  start,
  setup
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
      once: true
    }
  });

  setup(timeline);
}

export function cleanupLandingMotion() {
  window.__landingMotionCleanup__?.();
}

export function initLandingMotion() {
  if (typeof window === "undefined") {
    return;
  }

  cleanupLandingMotion();

  const root = document.querySelector(ROOT_SELECTOR);
  if (!root) {
    return;
  }

  const html = document.documentElement;
  const nav = root.querySelector<HTMLElement>("[data-motion-nav]");
  const hero = root.querySelector<HTMLElement>('[data-motion="hero"]');
  const allHidden = Array.from(root.querySelectorAll("[data-motion-hidden]"));

  if (!html.classList.contains("motion-enabled")) {
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
        isDesktop: "(min-width: 961px)",
        isMobile: "(max-width: 960px)",
        reduceMotion: "(prefers-reduced-motion: reduce)"
      },
      (media) => {
        const { isDesktop, isMobile, reduceMotion } = media.conditions as {
          isDesktop: boolean;
          isMobile: boolean;
          reduceMotion: boolean;
        };

        if (reduceMotion) {
          revealNow(allHidden);
          return undefined;
        }

        primeHiddenState(allHidden, isMobile);

        const heroEyebrow = root.querySelector<HTMLElement>("[data-motion-hero-eyebrow]");
        const heroTitle = root.querySelector<HTMLElement>("[data-motion-hero-title]");
        const heroCopy = root.querySelector<HTMLElement>("[data-motion-hero-copy]");
        const heroActions = Array.from(root.querySelectorAll("[data-motion-hero-actions] > *"));
        const heroGlow = root.querySelector<HTMLElement>("[data-motion-glow]");
        const trustItems = Array.from(root.querySelectorAll('[data-motion-item="trust"]'));
        const servicesSection = root.querySelector('[data-motion-section="services"]');
        const servicesHeadings = Array.from(servicesSection?.querySelectorAll("[data-motion-heading]") ?? []);
        const serviceCards = Array.from(root.querySelectorAll('[data-motion-item="service"]'));
        const portfolioSection = root.querySelector('[data-motion-section="portfolio"]');
        const portfolioHeadings = Array.from(portfolioSection?.querySelectorAll("[data-motion-heading]") ?? []);
        const projectCards = Array.from(root.querySelectorAll('[data-motion-item="project"]'));
        const projectImages = Array.from(root.querySelectorAll('[data-motion-item="project"] [data-motion-image]'));
        const whySection = root.querySelector('[data-motion-section="why"]');
        const whyHeadings = Array.from(whySection?.querySelectorAll("[data-motion-heading]") ?? []);
        const whyCopy = Array.from(whySection?.querySelectorAll("[data-motion-copy]") ?? []);
        const reasonItems = Array.from(root.querySelectorAll('[data-motion-item="reason"]'));
        const experiencePanel = Array.from(root.querySelectorAll("[data-motion-experience]"));
        const ctaSection = root.querySelector('[data-motion-section="cta"]');
        const ctaPanel = Array.from(root.querySelectorAll("[data-motion-panel]"));
        const ctaAccent = Array.from(root.querySelectorAll("[data-motion-accent]"));
        const ctaHeadings = Array.from(ctaSection?.querySelectorAll("[data-motion-heading]") ?? []);
        const ctaCopy = Array.from(ctaSection?.querySelectorAll("[data-motion-copy]") ?? []);
        const ctaButton = Array.from(root.querySelectorAll("[data-motion-button]"));
        const footerItems = Array.from(root.querySelectorAll('[data-motion-item="footer"]'));

        gsap.set(projectImages, {
          scale: 1.14,
          autoAlpha: 0.72,
          willChange: "transform, opacity"
        });

        const introTargets = [nav, heroEyebrow, heroTitle, heroCopy, ...heroActions].filter(Boolean);

        const intro = gsap.timeline({
          defaults: {
            duration: 0.95,
            ease: "power3.out"
          }
        });

        intro
          .to(nav, { autoAlpha: 1, y: 0, clearProps: "transform,opacity,willChange" }, 0)
          .to(heroEyebrow, { autoAlpha: 1, y: 0, clearProps: "transform,opacity,willChange" }, 0.16)
          .to(heroTitle, { autoAlpha: 1, y: 0, clearProps: "transform,opacity,willChange" }, 0.28)
          .to(heroCopy, { autoAlpha: 1, y: 0, clearProps: "transform,opacity,willChange" }, 0.44)
          .to(
            heroActions,
            {
              autoAlpha: 1,
              y: 0,
              stagger: 0.1,
              clearProps: "transform,opacity,willChange"
            },
            0.56
          );

        ScrollTrigger.create({
          trigger: hero,
          start: "bottom top+=90",
          onEnter: () => nav?.classList.add("is-scrolled"),
          onLeaveBack: () => nav?.classList.remove("is-scrolled")
        });

        if (hero && isDesktop) {
          gsap.to(hero, {
            "--grid-shift-x": "18px",
            "--grid-shift-y": "34px",
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 1.2
            }
          });

          gsap.to(heroGlow, {
            yPercent: -12,
            scale: 1.08,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 1
            }
          });
        }

        createSectionReveal({
          section: root.querySelector('[data-motion-section="trust"]'),
          targets: trustItems,
          start: "top 82%",
          setup: (timeline) => {
            timeline.to(trustItems, {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              clearProps: "transform,opacity,willChange"
            });
          }
        });

        createSectionReveal({
          section: servicesSection,
          targets: [...servicesHeadings, ...serviceCards],
          start: "top 74%",
          setup: (timeline) => {
            timeline
              .to(servicesHeadings, {
                autoAlpha: 1,
                y: 0,
                duration: 0.86,
                stagger: 0.1,
                ease: "power3.out",
                clearProps: "transform,opacity,willChange"
              })
              .to(
                serviceCards,
                {
                  autoAlpha: 1,
                  y: 0,
                  rotationX: 0,
                  duration: 0.95,
                  stagger: 0.12,
                  ease: "power3.out",
                  clearProps: "transform,opacity,willChange"
                },
                0.14
              );
          }
        });

        createSectionReveal({
          section: portfolioSection,
          targets: [...portfolioHeadings, ...projectCards],
          start: "top 76%",
          setup: (timeline) => {
            timeline
              .to(portfolioHeadings, {
                autoAlpha: 1,
                y: 0,
                duration: 0.86,
                stagger: 0.1,
                ease: "power3.out",
                clearProps: "transform,opacity,willChange"
              })
              .to(
                projectCards,
                {
                  autoAlpha: 1,
                  x: 0,
                  y: 0,
                  duration: 1,
                  stagger: 0.14,
                  ease: "power3.out",
                  clearProps: "transform,opacity,willChange"
                },
                0.14
              )
              .to(
                projectImages,
                {
                  scale: 1,
                  autoAlpha: 1,
                  duration: 1.1,
                  stagger: 0.14,
                  ease: "power3.out",
                  clearProps: "transform,opacity,willChange"
                },
                0.16
              );
          }
        });

        createSectionReveal({
          section: whySection,
          targets: [...whyHeadings, ...whyCopy, ...reasonItems, ...experiencePanel],
          start: "top 72%",
          setup: (timeline) => {
            timeline
              .to([...whyHeadings, ...whyCopy], {
                autoAlpha: 1,
                y: 0,
                duration: 0.88,
                stagger: 0.1,
                ease: "power3.out",
                clearProps: "transform,opacity,willChange"
              })
              .to(
                reasonItems,
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.82,
                  stagger: 0.08,
                  ease: "power3.out",
                  clearProps: "transform,opacity,willChange"
                },
                0.18
              )
              .to(
                experiencePanel,
                {
                  autoAlpha: 1,
                  scale: 1,
                  duration: 0.96,
                  ease: "power3.out",
                  clearProps: "transform,opacity,willChange"
                },
                0.24
              );
          }
        });

        createSectionReveal({
          section: ctaSection,
          targets: [...ctaPanel, ...ctaAccent, ...ctaHeadings, ...ctaCopy, ...ctaButton],
          start: "top 78%",
          setup: (timeline) => {
            timeline
              .to(ctaPanel, {
                autoAlpha: 1,
                y: 0,
                duration: 0.96,
                ease: "power3.out",
                clearProps: "transform,opacity,willChange"
              })
              .to(
                ctaAccent,
                {
                  scaleX: 1,
                  duration: 0.72,
                  ease: "power3.out",
                  clearProps: "transform,willChange"
                },
                0.08
              )
              .to(
                [...ctaHeadings, ...ctaCopy],
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.86,
                  stagger: 0.1,
                  ease: "power3.out",
                  clearProps: "transform,opacity,willChange"
                },
                0.14
              )
              .to(
                ctaButton,
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.9,
                  ease: "power3.out",
                  clearProps: "transform,opacity,willChange"
                },
                0.24
              );
          }
        });

        createSectionReveal({
          section: root.querySelector('[data-motion-section="footer"]'),
          targets: footerItems,
          start: "top 90%",
          setup: (timeline) => {
            timeline.to(footerItems, {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.08,
              ease: "power2.out",
              clearProps: "transform,opacity,willChange"
            });
          }
        });

        ScrollTrigger.refresh();

        return () => {
          nav?.classList.remove("is-scrolled");
          gsap.set(introTargets, {
            clearProps: "willChange"
          });
        };
      }
    );
  }, root);

  window.__landingMotionCleanup__ = () => {
    cleanupMatchMedia();
    context.revert();
    nav?.classList.remove("is-scrolled");
    delete window.__landingMotionCleanup__;
  };
}
