import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const getMotionTokens = () => {
  if (typeof window === 'undefined') return {};
  const styles = getComputedStyle(document.documentElement);
  return {
    durationFast: parseFloat(styles.getPropertyValue('--duration-fast')) || 0.25,
    durationBase: parseFloat(styles.getPropertyValue('--duration-base')) || 0.55,
    durationSlow: parseFloat(styles.getPropertyValue('--duration-slow')) || 0.9,
    durationXslow: parseFloat(styles.getPropertyValue('--duration-xslow')) || 1.4,
    easeOut: styles.getPropertyValue('--ease-out').trim() || 'cubic-bezier(0.16, 1, 0.3, 1)',
    easeInOut: styles.getPropertyValue('--ease-in-out').trim() || 'cubic-bezier(0.87, 0, 0.13, 1)',
    easeSpring: styles.getPropertyValue('--ease-spring').trim() || 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    revealY: parseFloat(styles.getPropertyValue('--reveal-y')) || 32,
    revealYSubtle: parseFloat(styles.getPropertyValue('--reveal-y-subtle')) || 14,
  };
};

export const initHovers = () => {
  // Hovers are mostly handled by CSS custom properties and Tailwind group-hover now to avoid JS overhead,
  // but if JS-based complex hovers are needed, they go here.
};
