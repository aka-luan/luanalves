import gsap from 'gsap';
import { getMotionTokens } from './utils.js';

/**
 * Hero entrance animation.
 * Headline lines stagger in from below, followed by subheadline and CTAs.
 * Falls back gracefully — elements start hidden via CSS opacity-0 on
 * `.hero-title-line`, `.hero-subheadline`, `.hero-cta`, `.hero-feature`.
 * If JS never runs, the no-js fallback in Hero.astro makes them visible.
 */
export function initHero() {
  const section = document.querySelector('[data-section="hero"]');
  if (!section) return;

  const tokens = getMotionTokens();
  const tl = gsap.timeline({ defaults: { ease: tokens.easeOut } });

  // ---------- Headline lines (stagger 80ms) ----------
  const lines = section.querySelectorAll('.hero-title-line');
  if (lines.length) {
    gsap.set(lines, { y: tokens.revealY * 2.5, opacity: 0 });
    tl.to(lines, {
      y: 0,
      opacity: 1,
      duration: tokens.durationSlow,
      stagger: 0.08,
    });
  }

  // ---------- Subheadline (enters after headline) ----------
  const sub = section.querySelector('.hero-subheadline');
  if (sub) {
    gsap.set(sub, { y: tokens.revealY, opacity: 0 });
    tl.to(
      sub,
      {
        y: 0,
        opacity: 1,
        duration: tokens.durationBase,
      },
      '-=0.25',
    );
  }

  // ---------- CTAs (enter after subheadline) ----------
  const ctas = section.querySelectorAll('.hero-cta');
  if (ctas.length) {
    gsap.set(ctas, { y: tokens.revealYSubtle, opacity: 0 });
    tl.to(
      ctas,
      {
        y: 0,
        opacity: 1,
        duration: tokens.durationBase,
        stagger: 0.1,
      },
      '-=0.2',
    );
  }

  // ---------- Feature pills (stagger fade-up) ----------
  const features = section.querySelectorAll('.hero-feature');
  if (features.length) {
    gsap.set(features, { y: tokens.revealYSubtle, opacity: 0 });
    tl.to(
      features,
      {
        y: 0,
        opacity: 1,
        duration: tokens.durationBase,
        stagger: 0.06,
      },
      '-=0.3',
    );
  }

  return tl;
}
