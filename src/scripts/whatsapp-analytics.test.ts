import { afterEach, describe, expect, it, vi } from 'vitest';
import { initWhatsappAnalytics } from './whatsapp-analytics';

const vercel = vi.hoisted(() => ({ track: vi.fn() }));
vi.mock('@vercel/analytics', () => vercel);
let cleanup: (() => void) | undefined;
function click(selector = 'a') {
  document.querySelector(selector)?.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
}
function markup(html: string) {
  document.body.innerHTML = html;
  document.body.addEventListener('click', (event) => event.preventDefault(), { once: true });
}
afterEach(() => {
  cleanup?.();
  document.body.innerHTML = '';
  delete window.gtag;
  vi.resetAllMocks();
});

describe('WhatsApp analytics', () => {
  it('tracks a child click with stable position and label without decorative icons or message text', () => {
    document.title = 'Página de serviço';
    window.history.replaceState({}, '', '/landing-page/?email=private@example.com');
    markup('<a href="https://wa.me/5591982890565?text=Mensagem%20privada" data-analytics-position="service_hero"><span>Falar no WhatsApp</span><span class="material-symbols-outlined">forum</span><svg><title>Decorativo</title></svg></a>');
    const send = vi.fn();
    cleanup = initWhatsappAnalytics(document, send);
    click('a > span');
    expect(send).toHaveBeenCalledExactlyOnceWith('whatsapp_click', {
      page_path: '/landing-page/', page_title: 'Página de serviço',
      cta_label: 'Falar no WhatsApp', cta_position: 'service_hero',
    });
  });

  it('prefers an explicit label and inherits a stable region position', () => {
    markup('<section data-analytics-position="home_final"><a href="https://wa.me/123" data-analytics-label="Solicitar orçamento" aria-label="Outro rótulo">forum</a></section>');
    const send = vi.fn();
    cleanup = initWhatsappAnalytics(document, send);
    click();
    expect(send.mock.calls[0][1]).toMatchObject({ cta_label: 'Solicitar orçamento', cta_position: 'home_final' });
  });

  it('ignores unrelated links and URLs that merely contain wa.me', () => {
    const send = vi.fn();
    cleanup = initWhatsappAnalytics(document, send);
    for (const href of ['/portfolio/', 'https://example.com/wa.me/123', 'https://wa.me.evil.example/123']) {
      markup('<a href="' + href + '">Ver portfólio</a>');
      click();
    }
    expect(send).not.toHaveBeenCalled();
  });

  it('reinitializes without duplicates, tolerates stale cleanup, and reads new Barba content and title', () => {
    const oldSend = vi.fn();
    const oldCleanup = initWhatsappAnalytics(document, oldSend);
    const send = vi.fn();
    cleanup = initWhatsappAnalytics(document, send);
    oldCleanup();
    const nextSend = vi.fn();
    cleanup = initWhatsappAnalytics(document, nextSend);
    document.title = 'Case Conviva';
    window.history.replaceState({}, '', '/portfolio/conviva-engenharia/');
    markup('<a href="https://wa.me/123" data-analytics-position="footer_contact"><span>Contato</span></a>');
    click('span');
    expect(oldSend).not.toHaveBeenCalled();
    expect(send).not.toHaveBeenCalled();
    expect(nextSend).toHaveBeenCalledExactlyOnceWith('whatsapp_click', {
      page_path: '/portfolio/conviva-engenharia/', page_title: 'Case Conviva',
      cta_label: 'Contato', cta_position: 'footer_contact',
    });
    cleanup();
    click();
    expect(nextSend).toHaveBeenCalledTimes(1);
  });

  it('sends one event to each provider and continues if Vercel throws', () => {
    markup('<a href="https://wa.me/123">Contato</a>');
    window.gtag = vi.fn();
    vercel.track.mockImplementation(() => { throw new Error('blocked'); });
    cleanup = initWhatsappAnalytics();
    click();
    expect(window.gtag).toHaveBeenCalledTimes(1);
    expect(window.gtag).toHaveBeenCalledWith('event', 'whatsapp_click', expect.objectContaining({ cta_label: 'Contato' }));
    expect(vercel.track).toHaveBeenCalledTimes(1);
  });

  it('tracks a click on the decorative icon with only the readable CTA label', () => {
    markup('<a href="https://wa.me/123" data-analytics-position="service_hero">Solicitar orçamento<span aria-hidden="true" class="material-symbols-outlined">arrow_outward</span></a>');
    const send = vi.fn();
    cleanup = initWhatsappAnalytics(document, send);
    click('.material-symbols-outlined');
    expect(send).toHaveBeenCalledExactlyOnceWith('whatsapp_click', expect.objectContaining({
      cta_label: 'Solicitar orçamento', cta_position: 'service_hero',
    }));
  });

  it('continues delivering to Vercel when Google throws and removes the listener on repeated cleanup', () => {
    markup('<a href="https://wa.me/123" aria-label="Falar no WhatsApp"><svg><title>forum</title></svg></a>');
    window.gtag = vi.fn(() => { throw new Error('blocked'); });
    cleanup = initWhatsappAnalytics();
    click('svg');
    expect(window.gtag).toHaveBeenCalledTimes(1);
    expect(vercel.track).toHaveBeenCalledExactlyOnceWith('whatsapp_click', expect.objectContaining({
      cta_label: 'Falar no WhatsApp', cta_position: 'unclassified',
    }));
    cleanup();
    cleanup();
    click();
    expect(vercel.track).toHaveBeenCalledTimes(1);
  });
});
