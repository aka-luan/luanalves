import barba from '@barba/core';
import gsap from 'gsap';
import { cleanupLandingMotion, initLandingMotion } from './landing-motion';
import { initInsightPost } from './insight-post';
import { cleanupPortfolioFilters, initPortfolioFilters } from './portfolio-filters';
import { initProjectModalFromDom } from './project-modal';
import { cleanupMobileNav, initMobileNav } from './mobile-nav';

type Cleanup = () => void;

declare global {
  interface Window {
    __pageTransitionsStarted__?: boolean;
  }
}

let cleanupProjectModal: Cleanup = () => {};
let cleanupInsightPost: Cleanup = () => {};
let cleanupPortfolioPageFilters: Cleanup = () => {};
let pendingHash = '';

const reduceMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function toPromise(targets: gsap.TweenTarget, vars: gsap.TweenVars) {
  const durationMs =
    typeof vars.duration === 'number' ? Math.ceil(vars.duration * 1000) : 0;

  gsap.to(targets, vars);

  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, durationMs + 80);
  });
}

function getContainerRoot() {
  return document.querySelector<HTMLElement>('[data-barba="container"]') ?? document;
}

function bootPageScripts({ includeMobileNav = true } = {}) {
  const root = getContainerRoot();

  initLandingMotion();
  cleanupProjectModal();
  cleanupInsightPost();
  cleanupPortfolioPageFilters();
  cleanupProjectModal = initProjectModalFromDom();
  cleanupInsightPost = initInsightPost(root);
  cleanupPortfolioPageFilters = initPortfolioFilters(root);

  if (includeMobileNav) {
    initMobileNav(root);
  }
}

function cleanupPageScripts() {
  cleanupLandingMotion();
  cleanupProjectModal();
  cleanupInsightPost();
  cleanupPortfolioPageFilters();
  cleanupProjectModal = () => {};
  cleanupInsightPost = () => {};
  cleanupPortfolioPageFilters = () => {};
  cleanupMobileNav();
  document.body.classList.remove('menu-open');
}

function syncHead(nextHtml: string) {
  const nextDocument = new DOMParser().parseFromString(nextHtml, 'text/html');
  const nextTitle = nextDocument.querySelector('title')?.textContent;

  if (nextTitle) {
    document.title = nextTitle;
  }

  const selectors = [
    'meta[name="description"]',
    'meta[property^="og:"]',
    'meta[name^="twitter:"]',
    'link[rel="canonical"]',
  ];

  selectors.forEach((selector) => {
    const currentNodes = Array.from(document.head.querySelectorAll(selector));
    const nextNodes = Array.from(nextDocument.head.querySelectorAll(selector));

    currentNodes.forEach((node) => node.remove());
    nextNodes.forEach((node) => document.head.append(node.cloneNode(true)));
  });

  const assetSelectors = [
    'link[rel="stylesheet"][href]',
    'style[data-vite-dev-id]',
    'style[data-astro-dev-id]',
  ];

  assetSelectors.forEach((selector) => {
    const currentKeys = new Set(
      Array.from(document.head.querySelectorAll(selector)).map(getHeadNodeKey),
    );

    Array.from(nextDocument.head.querySelectorAll(selector)).forEach((node) => {
      const key = getHeadNodeKey(node);
      if (!currentKeys.has(key)) {
        document.head.append(node.cloneNode(true));
      }
    });
  });
}

function getHeadNodeKey(node: Element) {
  if (node instanceof HTMLLinkElement && node.href) {
    return node.href;
  }

  return node.getAttribute('data-vite-dev-id') ?? node.outerHTML;
}

function shouldPrevent({ el, href }: { el: HTMLAnchorElement; href: string }) {
  const target = el.getAttribute('target');
  const download = el.hasAttribute('download');
  const url = new URL(href, window.location.href);
  const current = new URL(window.location.href);
  const isExternal = url.origin !== current.origin;
  const isSamePageHash =
    url.pathname === current.pathname && url.search === current.search && Boolean(url.hash);

  return Boolean(target) || download || isExternal || isSamePageHash;
}

function scrollToTarget(hash = window.location.hash) {
  if (!hash) {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    return;
  }

  const target = document.querySelector(hash);
  if (target) {
    target.scrollIntoView({ behavior: reduceMotion() ? 'instant' : 'smooth' });
    return;
  }

  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

function initBarba() {
  if (window.__pageTransitionsStarted__) {
    bootPageScripts();
    return;
  }

  window.__pageTransitionsStarted__ = true;

  barba.hooks.before(({ trigger }) => {
    pendingHash =
      trigger instanceof HTMLAnchorElement
        ? new URL(trigger.href, window.location.href).hash
        : '';
  });

  barba.hooks.beforeEnter(({ next }) => {
    if (next.html) {
      syncHead(next.html);
    }
  });

  barba.hooks.afterEnter(() => {
    if (pendingHash && window.location.hash !== pendingHash) {
      history.replaceState(
        history.state,
        '',
        `${window.location.pathname}${window.location.search}${pendingHash}`,
      );
    }
  });

  barba.hooks.after(() => {
    bootPageScripts();
    requestAnimationFrame(() => {
      scrollToTarget(pendingHash);
      pendingHash = '';
    });
    document.documentElement.classList.remove('is-transitioning');
  });

  barba.init({
    prevent: shouldPrevent,
    timeout: 7000,
    transitions: [
      {
        name: 'site-fade-slide',
        leave({ current }) {
          document.documentElement.classList.add('is-transitioning');
          cleanupPageScripts();

          if (reduceMotion()) {
            gsap.set(current.container, { autoAlpha: 0 });
            return;
          }

          return toPromise(current.container, {
            autoAlpha: 0,
            y: -18,
            duration: 0.34,
            ease: 'power2.inOut',
          });
        },
        beforeEnter({ next }) {
          gsap.set(next.container, {
            autoAlpha: 0,
            y: reduceMotion() ? 0 : 24,
          });
        },
        enter({ next }) {
          if (reduceMotion()) {
            gsap.set(next.container, { autoAlpha: 1, y: 0 });
            return;
          }

          return toPromise(next.container, {
            autoAlpha: 1,
            y: 0,
            duration: 0.48,
            ease: 'power3.out',
            clearProps: 'opacity,visibility,transform',
          });
        },
      },
    ],
  });

  bootPageScripts({ includeMobileNav: false });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBarba, { once: true });
} else {
  initBarba();
}
