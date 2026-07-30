import { track } from '@vercel/analytics';

type TrackEvent = (
  name: string,
  properties: Record<string, string>,
) => void;

let cleanupWhatsappAnalytics: (() => void) | undefined;

function getLinkFromEvent(event: Event) {
  const target = event.target;
  const element =
    target instanceof Element
      ? target
      : target instanceof Node
        ? target.parentElement
        : null;

  return element?.closest<HTMLAnchorElement>('a[href*="wa.me/"]') ?? null;
}

export function initWhatsappAnalytics(
  root: Document = document,
  send: TrackEvent = track,
) {
  cleanupWhatsappAnalytics?.();

  const handleClick = (event: Event) => {
    const link = getLinkFromEvent(event);
    if (!link) {
      return;
    }

    const label =
      link.dataset.analyticsLabel ??
      link.getAttribute('aria-label') ??
      link.textContent?.replace(/\s+/g, ' ').trim() ??
      'WhatsApp';

    send('whatsapp_click', {
      page_path: window.location.pathname,
      page_title: document.title,
      cta_label: label.slice(0, 80),
    });
  };

  root.addEventListener('click', handleClick);

  cleanupWhatsappAnalytics = () => {
    root.removeEventListener('click', handleClick);
    cleanupWhatsappAnalytics = undefined;
  };

  return cleanupWhatsappAnalytics;
}
