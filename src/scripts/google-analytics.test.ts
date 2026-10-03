import { afterEach, expect, it, vi } from 'vitest';
import { trackGooglePageView } from './google-analytics';
afterEach(() => { delete window.gtag; });
it('sends page views using the current title and excludes query/hash data', () => {
  window.history.replaceState({}, '', '/landing-page/?email=private@example.com#contato');
  document.title = 'Landing page';
  window.gtag = vi.fn();
  trackGooglePageView();
  expect(window.gtag).toHaveBeenCalledWith('event', 'page_view', {
    page_path: '/landing-page/', page_title: 'Landing page',
    page_location: window.location.origin + '/landing-page/', page_referrer: '',
  });
  expect(window.gtag).toHaveBeenCalledTimes(2);
});
it('keeps the page available when GA4 is not configured', () => {
  expect(() => trackGooglePageView()).not.toThrow();
});
