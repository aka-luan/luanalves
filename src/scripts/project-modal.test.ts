// @vitest-environment jsdom

import { describe, expect, it } from "vitest";

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
          <button type="button" data-project-modal-close aria-label="Fechar"></button>
          <div data-project-modal-hero>
            <img data-project-modal-hero-image src="" alt="" />
          </div>
          <p data-project-modal-kicker></p>
          <h2 data-project-modal-title></h2>
          <p data-project-modal-description></p>
          <a data-project-modal-link href=""></a>
          <video data-project-modal-video playsinline muted loop>
            <source data-project-modal-video-source src="" type="video/mp4" />
          </video>
          <div data-project-modal-gallery>
            <img data-project-modal-gallery-image src="" alt="" />
            <img data-project-modal-gallery-image src="" alt="" />
            <img data-project-modal-gallery-image src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  `;
}

describe("initProjectModal", () => {
  it("abre o modal com os dados do projeto e fecha ao pressionar Escape", () => {
    Object.defineProperty(HTMLMediaElement.prototype, "load", {
      configurable: true,
      value() {},
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
    const source = document.querySelector<HTMLSourceElement>("[data-project-modal-video-source]");
    const gallery = Array.from(
      document.querySelectorAll<HTMLImageElement>("[data-project-modal-gallery-image]"),
    );

    trigger?.click();

    expect(modal?.hidden).toBe(false);
    expect(modal?.getAttribute("aria-hidden")).toBe("false");
    expect(document.body.classList.contains("project-modal-open")).toBe(true);
    expect(title?.textContent).toBe(project.title);
    expect(description?.textContent).toBe(project.description);
    expect(link?.href).toBe(project.url);
    expect(video?.poster).toContain(project.caseVideo.poster);
    expect(source?.src).toContain(project.caseVideo.src);
    expect(gallery.map((item) => item.getAttribute("src"))).toEqual(
      project.gallery.map((item) => item.src),
    );

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));

    expect(modal?.hidden).toBe(true);
    expect(modal?.getAttribute("aria-hidden")).toBe("true");
    expect(document.body.classList.contains("project-modal-open")).toBe(false);

    cleanup();
  });
});
