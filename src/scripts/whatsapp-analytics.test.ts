import { afterEach, describe, expect, it, vi } from 'vitest';
import { initWhatsappAnalytics } from './whatsapp-analytics';

describe('WhatsApp analytics', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('tracks the current page and CTA label for wa.me links', () => {
    document.title = 'Página de serviço';
    window.history.replaceState({}, '', '/landing-page/');
    document.body.innerHTML = `
      <a href="https://wa.me/5591982890565?text=Olá">
        <span>Falar no WhatsApp</span>
      </a>
    `;
    const send = vi.fn();
    const cleanup = initWhatsappAnalytics(document, send);
    document.querySelector('a')?.addEventListener('click', (event) => {
      event.preventDefault();
    });

    document.querySelector('span')?.dispatchEvent(
      new MouseEvent('click', { bubbles: true, cancelable: true }),
    );

    expect(send).toHaveBeenCalledWith('whatsapp_click', {
      page_path: '/landing-page/',
      page_title: 'Página de serviço',
      cta_label: 'Falar no WhatsApp',
    });

    cleanup();
  });

  it('ignores links that do not open WhatsApp', () => {
    document.body.innerHTML = '<a href="/portfolio/">Ver portfólio</a>';
    const send = vi.fn();
    const cleanup = initWhatsappAnalytics(document, send);
    document.querySelector('a')?.addEventListener('click', (event) => {
      event.preventDefault();
    });

    document.querySelector('a')?.dispatchEvent(
      new MouseEvent('click', { bubbles: true, cancelable: true }),
    );

    expect(send).not.toHaveBeenCalled();
    cleanup();
  });
});
