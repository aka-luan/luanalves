// @vitest-environment jsdom

import { describe, expect, it, vi } from "vitest";

import { initProjectModal } from "./project-modal";

const project = {
  id: "tresor-incorporacoes",
  title: "Trésor Incorporações",
  subtitle: "Desenvolvimento & Motion",
  description:
    "Placeholder de descrição curta para apresentar contexto, direção visual e resultado do projeto.",
  image: "/assets/tresor-home.webp",
  alt: "Thumb do projeto Trésor",
  url: "https://example.com/tresor",
  caseVideo: {
    poster: "/assets/placeholders/tresor-video-poster.webp",
    src: "/assets/placeholders/tresor-showcase.mp4",
    title: "Mini showcase do projeto Trésor",
  },
  gallery: [
    {
      src: "/assets/placeholders/tresor-gallery-01.webp",
      alt: "Visão editorial 1",
    },
    {
      src: "/assets/placeholders/tresor-gallery-02.webp",
      alt: "Visão editorial 2",
    },
    {
      src: "/assets/placeholders/tresor-gallery-03.webp",
      alt: "Visão editorial 3",
    },
  ],
};

function createFixture() {
  document.body.innerHTML = `
    <div data-page="home">
      <button
        type="button"
        data-project-trigger
        data-project-id="${project.id}"
        aria-haspopup="dialog"
      >
        <span data-project-origin>
          <img src="${project.image}" alt="${project.alt}" />
        </span>
      </button>

      <div
        class="project-modal"
        data-project-modal
        aria-hidden="true"
        hidden
      >
        <button type="button" data-project-modal-backdrop aria-label="Fechar modal"></button>
        <div data-project-modal-panel>
          <div class="project-modal-layout">
            <div class="project-modal-primary">
              <div data-project-modal-video-wrapper>
                <video data-project-modal-video playsinline muted loop>
                  <source data-project-modal-video-source src="" type="video/mp4" />
                </video>
              </div>
              <div data-project-modal-copy-wrapper>
                <p data-project-modal-kicker></p>
                <h2 data-project-modal-title></h2>
                <p data-project-modal-description></p>
                <a data-project-modal-link href=""></a>
              </div>
            </div>
            <div class="project-modal-secondary">
              <div data-project-modal-hero>
                <img data-project-modal-hero-image src="" alt="" />
              </div>
              <div data-project-modal-gallery>
                <span data-project-modal-gallery-count></span>
                <button type="button" data-project-modal-gallery-prev></button>
                <button type="button" data-project-modal-gallery-open>
                  <img data-project-modal-gallery-image src="" alt="" />
                </button>
                <button type="button" data-project-modal-gallery-next></button>
              </div>
            </div>
          </div>
          <button type="button" data-project-modal-close aria-label="Fechar"></button>
        </div>
      </div>
    </div>
    <div data-project-lightbox aria-hidden="true" hidden>
      <button type="button" data-project-lightbox-backdrop></button>
      <div class="project-lightbox-shell">
        <button type="button" data-project-lightbox-close></button>
        <img data-project-lightbox-image src="" alt="" />
      </div>
    </div>
  `;
}

describe("initProjectModal", () => {
  it("abre o modal com os dados do projeto e fecha ao pressionar Escape", () => {
    vi.useFakeTimers();
    const playMock = vi.fn().mockResolvedValue(undefined);
    const pauseMock = vi.fn();

    Object.defineProperty(HTMLMediaElement.prototype, "load", {
      configurable: true,
      value() {},
    });
    Object.defineProperty(HTMLMediaElement.prototype, "play", {
      configurable: true,
      value: playMock,
    });
    Object.defineProperty(HTMLMediaElement.prototype, "pause", {
      configurable: true,
      value: pauseMock,
    });

    createFixture();

    const cleanup = initProjectModal({
      projects: [project],
      reduceMotion: true,
    });

    const trigger = document.querySelector<HTMLElement>("[data-project-trigger]");
    const modal = document.querySelector<HTMLElement>("[data-project-modal]");
    const title = document.querySelector<HTMLElement>("[data-project-modal-title]");
    const description = document.querySelector<HTMLElement>("[data-project-modal-description]");
    const link = document.querySelector<HTMLAnchorElement>("[data-project-modal-link]");
    const video = document.querySelector<HTMLVideoElement>("[data-project-modal-video]");
    const primary = document.querySelector<HTMLElement>(".project-modal-primary");
    const source = document.querySelector<HTMLSourceElement>("[data-project-modal-video-source]");
    const gallery = document.querySelector<HTMLImageElement>("[data-project-modal-gallery-image]");
    const galleryCount = document.querySelector<HTMLElement>("[data-project-modal-gallery-count]");
    const galleryNext = document.querySelector<HTMLButtonElement>("[data-project-modal-gallery-next]");
    const galleryOpen = document.querySelector<HTMLButtonElement>("[data-project-modal-gallery-open]");
    const lightbox = document.querySelector<HTMLElement>("[data-project-lightbox]");
    const lightboxImage = document.querySelector<HTMLImageElement>("[data-project-lightbox-image]");

    trigger?.click();

    expect(modal?.hidden).toBe(false);
    expect(modal?.getAttribute("aria-hidden")).toBe("false");
    expect(document.body.classList.contains("project-modal-open")).toBe(false);
    expect(title?.textContent).toBe(project.title);
    expect(title?.closest(".project-modal-primary")).toBe(primary);
    expect(description?.textContent).toBe(project.description);
    expect(link?.href).toBe(project.url);
    expect(video?.poster).toContain(project.caseVideo.poster);
    expect(source?.src).toContain(project.caseVideo.src);
    expect(playMock).toHaveBeenCalledTimes(1);
    expect(gallery?.getAttribute("src")).toBe(project.gallery[0]?.src);
    expect(galleryCount?.textContent).toBe("1 / 3");

    vi.advanceTimersByTime(3100);
    expect(gallery?.getAttribute("src")).toBe(project.gallery[1]?.src);
    expect(galleryCount?.textContent).toBe("2 / 3");

    galleryNext?.click();
    expect(gallery?.getAttribute("src")).toBe(project.gallery[2]?.src);
    expect(galleryCount?.textContent).toBe("3 / 3");

    galleryOpen?.click();
    expect(lightbox?.hidden).toBe(false);
    expect(lightboxImage?.getAttribute("src")).toBe(project.gallery[2]?.src);

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    expect(lightbox?.hidden).toBe(true);

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    expect(modal?.hidden).toBe(true);
    expect(modal?.getAttribute("aria-hidden")).toBe("true");
    expect(pauseMock).toHaveBeenCalledTimes(1);
    expect(document.body.classList.contains("project-modal-open")).toBe(false);

    cleanup();
    vi.useRealTimers();
  });
});
