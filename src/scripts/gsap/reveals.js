import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { getMotionTokens } from './utils.js';

gsap.registerPlugin(ScrollTrigger);

/**
 * Generic scroll-triggered reveals.
 * Any element with `data-animate="reveal"` will fade-up on scroll.
 * `data-reveal` can be: "fade-up" (default), "fade", "fade-left", "fade-right".
 * `data-stagger` on a parent will stagger its `data-animate="reveal"` children.
 */
export function initReveals() {
  const tokens = getMotionTokens();

  // ---- Standalone reveals ----
  const singles = document.querySelectorAll(
    '[data-animate="reveal"]:not([data-stagger] [data-animate="reveal"])',
  );

  singles.forEach((el) => {
    const type = el.dataset.reveal || 'fade-up';
    const from = getRevealFrom(type, tokens);

    gsap.set(el, from);

    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(el, {
          ...getRevealTo(),
          duration: tokens.durationBase,
          ease: tokens.easeOut,
        });
      },
    });
  });

  // ---- Stagger groups ----
  const groups = document.querySelectorAll('[data-stagger]');

  groups.forEach((group) => {
    const children = group.querySelectorAll('[data-animate="reveal"]');
    if (!children.length) return;

    const type = children[0].dataset.reveal || 'fade-up';
    const from = getRevealFrom(type, tokens);

    gsap.set(children, from);

    ScrollTrigger.create({
      trigger: group,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(children, {
          ...getRevealTo(),
          duration: tokens.durationBase,
          ease: tokens.easeOut,
          stagger: 0.08,
        });
      },
    });
  });
}

// ---------- Helpers ----------

function getRevealFrom(type, tokens) {
  switch (type) {
    case 'fade':
      return { opacity: 0 };
    case 'fade-left':
      return { x: -tokens.revealY, opacity: 0 };
    case 'fade-right':
      return { x: tokens.revealY, opacity: 0 };
    case 'fade-up':
    default:
      return { y: tokens.revealY, opacity: 0 };
  }
}

function getRevealTo() {
  return { x: 0, y: 0, opacity: 1 };
}
