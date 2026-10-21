import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanupMobileNav, initMobileNav } from './mobile-nav';

let reducedMotion = true;

beforeEach(() => {
  vi.stubGlobal('matchMedia', () => ({ matches: reducedMotion }));
  vi.stubGlobal('innerWidth', 390);
  document.body.innerHTML = `
    <nav data-mobile-nav>
      <div data-mobile-nav-bar>
        <button id="site-nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav-menu">Menu</button>
      </div>
      <div id="site-nav-menu" data-mobile-nav-menu>
        <div data-mobile-menu-content><a href="#sobre" data-mobile-menu-link>Sobre</a></div>
      </div>
    </nav>`;
});

afterEach(() => {
  cleanupMobileNav();
  vi.unstubAllGlobals();
  document.body.innerHTML = '';
  reducedMotion = true;
});

function elements() {
  return {
    button: document.querySelector<HTMLButtonElement>('#site-nav-toggle')!,
    menu: document.querySelector<HTMLElement>('[data-mobile-nav-menu]')!,
    link: document.querySelector<HTMLAnchorElement>('[data-mobile-menu-link]')!,
  };
}

describe('mobile navigation disclosure', () => {
  it('exposes its state, closes on Escape and restores the button focus', () => {
    initMobileNav();
    const { button, menu, link } = elements();
    expect(menu.inert).toBe(true);
    button.click();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(button.getAttribute('aria-label')).toBe('Fechar menu de navegação');
    expect(menu.inert).toBe(false);
    expect(document.body.classList.contains('menu-open')).toBe(true);
    link.focus();
    link.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(menu.inert).toBe(true);
    expect(document.activeElement).toBe(button);
    expect(document.body.classList.contains('menu-open')).toBe(false);
  });

  it('initializes repeatedly without double toggles and removes stale listeners on navigation', () => {
    initMobileNav();
    initMobileNav();
    const { button, link } = elements();
    button.click();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    link.click();
    expect(button.getAttribute('aria-expanded')).toBe('false');
    cleanupMobileNav();
    button.click();
    expect(button.getAttribute('aria-expanded')).toBe('false');
    initMobileNav();
    button.click();
    expect(button.getAttribute('aria-expanded')).toBe('true');
  });

  it('releases scroll lock and desktop navigation when resized during an animation', () => {
    reducedMotion = false;
    initMobileNav();
    const { button, menu } = elements();
    button.click();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    button.click();
    button.click();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    vi.stubGlobal('innerWidth', 1440);
    window.dispatchEvent(new Event('resize'));
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(menu.inert).toBe(false);
    expect(document.body.classList.contains('menu-open')).toBe(false);
    expect(menu.style.height).toBe('');
  });

  it('keeps long reduced-motion navigation within the available viewport', () => {
    vi.stubGlobal('innerHeight', 844);
    const bar = document.querySelector<HTMLElement>('[data-mobile-nav-bar]')!;
    const content = document.querySelector<HTMLElement>('[data-mobile-menu-content]')!;
    Object.defineProperty(bar, 'offsetHeight', { value: 44 });
    Object.defineProperty(content, 'scrollHeight', { value: 1200 });
    initMobileNav();
    const { button, menu } = elements();
    button.click();
    expect(Number.parseFloat(menu.style.height)).toBeLessThanOrEqual(844 - 44);
    expect(content.style.maxHeight).toBe(menu.style.height);
    expect(menu.style.height).not.toBe('auto');
  });
});
