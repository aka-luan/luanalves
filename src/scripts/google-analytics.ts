type GoogleTag = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GoogleTag;
  }
}

let previousPage: string | undefined;
function cleanUrl(value: string) {
  try {
    const url = new URL(value);
    return url.origin + url.pathname;
  } catch {
    return '';
  }
}

export function trackGoogleEvent(name: string, properties: Record<string, string>) {
  try {
    window.gtag?.('event', name, properties);
  } catch {
    // Analytics availability must not affect navigation.
  }
}

export function trackGooglePageView() {
  if (!window.gtag) {
    return;
  }
  const page = {
    page_path: window.location.pathname,
    page_location: window.location.origin + window.location.pathname,
    page_title: document.title,
    page_referrer: previousPage ?? cleanUrl(document.referrer),
  };
  try {
    // Update shared context so later WhatsApp events belong to the new Barba page.
    window.gtag('set', page);
    trackGoogleEvent('page_view', page);
    previousPage = page.page_location;
  } catch {
    // Navigation remains available when the Google tag is blocked.
  }
}
