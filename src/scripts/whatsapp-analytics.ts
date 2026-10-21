import { track } from '@vercel/analytics';
import { trackGoogleEvent } from './google-analytics';

type TrackEvent = (name: string, properties: Record<string, string>) => void;
let cleanupWhatsappAnalytics: (() => void) | undefined;

function sendWhatsappEvent(name: string, properties: Record<string, string>) {
  // A blocked or unavailable provider must not interrupt the CTA or the other provider.
  for (const send of [trackGoogleEvent, track]) {
    try {
      send(name, properties);
    } catch {
      // Navigation remains available even when analytics cannot be delivered.
    }
  }
}

function getLinkFromEvent(event: Event) {
  const target = event.target;
  const element =
    target instanceof Element
      ? target
      : target instanceof Node
        ? target.parentElement
        : null;
  const link = element?.closest<HTMLAnchorElement>('a[href]');
  if (!link) {
    return null;
  }

  try {
    const url = new URL(link.href);
    return url.protocol === 'https:' && url.hostname === 'wa.me' ? link : null;
  } catch {
    return null;
  }
}

function getLabel(link: HTMLAnchorElement) {
  const text = link.cloneNode(true) as HTMLAnchorElement;
  text
    .querySelectorAll('[aria-hidden="true"], .material-symbols-outlined, svg')
    .forEach((icon) => icon.remove());
  const label =
    link.dataset.analyticsLabel ||
    link.getAttribute('aria-label') ||
    text.textContent ||
    'WhatsApp';
  return label.replace(/\s+/g, ' ').trim().slice(0, 80) || 'WhatsApp';
}

export function initWhatsappAnalytics(
  root: Document = document,
  send: TrackEvent = sendWhatsappEvent,
) {
  cleanupWhatsappAnalytics?.();

  const handleClick = (event: Event) => {
    const link = getLinkFromEvent(event);
    if (!link) {
      return;
    }

    send('whatsapp_click', {
      page_path: window.location.pathname,
      page_title: root.title,
      cta_label: getLabel(link),
      cta_position: link.closest<HTMLElement>('[data-analytics-position]')
        ?.dataset.analyticsPosition ?? 'unclassified',
    });
  };

  root.addEventListener('click', handleClick);
  const cleanup = () => {
    root.removeEventListener('click', handleClick);
    if (cleanupWhatsappAnalytics === cleanup) {
      cleanupWhatsappAnalytics = undefined;
    }
  };
  cleanupWhatsappAnalytics = cleanup;
  return cleanup;
}
