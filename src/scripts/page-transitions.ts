import barba from '@barba/core';
import { cleanupLandingMotion, initLandingMotion } from './landing-motion';
import { initInsightPost } from './insight-post';
import { cleanupPortfolioFilters, initPortfolioFilters } from './portfolio-filters';
import { cleanupMobileNav, initMobileNav } from './mobile-nav';
import { trackGooglePageView } from './google-analytics';
import { initWhatsappAnalytics } from './whatsapp-analytics';

type Cleanup = () => void;

declare global {
  interface Window {
    __pageTransitionsStarted__?: boolean;
  }
}

let cleanupBriefing: Cleanup = () => {};
let briefingBoot = 0;
let cleanupInsightPost: Cleanup = () => {};
let cleanupPortfolioPageFilters: Cleanup = () => {};
let pendingHash = '';

const reduceMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// WAAPI opacity runs on the compositor, so the fade keeps its frames while
// the main thread parses and lays out the incoming page.
function fade(element: HTMLElement, to: 0 | 1, duration: number) {
  const animation = element.animate(
    [{ opacity: to === 1 ? 0 : 1 }, { opacity: to }],
    { duration, easing: 'cubic-bezier(0.23, 1, 0.32, 1)', fill: 'forwards' },
  );

  return animation.finished
    .catch(() => undefined)
    .then(() => {
      element.style.opacity = to === 1 ? '' : '0';
      animation.cancel();
    });
}

function getContainerRoot() {
  return document.querySelector<HTMLElement>('[data-barba="container"]') ?? document;
}

function bootPageScripts() {
  const root = getContainerRoot();

  const currentBriefingBoot = ++briefingBoot;
  cleanupBriefing();
  const briefingForm = root.querySelector('#briefing-form');
  if (briefingForm) {
    void import('./briefing').then(({ initBriefing }) => {
      if (currentBriefingBoot === briefingBoot && briefingForm.isConnected) {
        cleanupBriefing = initBriefing(root);
      }
    });
  }
  initLandingMotion();
  cleanupInsightPost();
  cleanupPortfolioPageFilters();
  cleanupInsightPost = initInsightPost(root);
  cleanupPortfolioPageFilters = initPortfolioFilters(root);

  initMobileNav(root);
}

function cleanupPageScripts() {
  briefingBoot++;
  cleanupBriefing();
  cleanupBriefing = () => {};
  cleanupLandingMotion();
  cleanupInsightPost();
  cleanupPortfolioPageFilters();
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
    'meta[name="robots"]',
    'meta[property^="og:"]',
    'meta[name^="twitter:"]',
    'link[rel="canonical"]',
    'link[rel="preload"][as="image"]',
    'script[type="application/ld+json"]',
  ];

  selectors.forEach((selector) => {
    const currentNodes = Array.from(document.head.querySelectorAll(selector));
    const nextNodes = Array.from(nextDocument.head.querySelectorAll(selector));

    currentNodes.forEach((node) => node.remove());
    nextNodes.forEach((node) => document.head.append(node.cloneNode(true)));
  });

  const assetSelectors = [
    'link[rel="stylesheet"][href]',
    // Production CSS is inline; keep route styles available after Barba swaps.
    'style',
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

  return (
    Boolean(document.querySelector('#briefing-form')) ||
    url.pathname.replace(/\/$/, '') === '/criar-site' ||
    Boolean(target) || download || isExternal || isSamePageHash
  );
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
  initWhatsappAnalytics();

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
    // Barba calls afterEnter on both the first load and subsequent navigation.
    trackGooglePageView();
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
        name: 'site-fade',
        leave({ current }) {
          document.documentElement.classList.add('is-transitioning');
          cleanupPageScripts();

          if (reduceMotion()) {
            current.container.style.opacity = '0';
            return;
          }

          return fade(current.container, 0, 150);
        },
        beforeEnter({ next }) {
          next.container.style.opacity = '0';
        },
        enter({ next }) {
          if (reduceMotion()) {
            next.container.style.opacity = '';
            return;
          }

          return fade(next.container, 1, 200);
        },
      },
    ],
  });

  bootPageScripts();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBarba, { once: true });
} else {
  initBarba();
}
