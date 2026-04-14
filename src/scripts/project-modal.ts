import gsap from "gsap";

export type ProjectModalMedia = {
  src: string;
  alt: string;
};

export type ProjectModalVideo = {
  src: string;
  poster: string;
  title: string;
};

export type ProjectModalProject = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  url: string;
  caseVideo: ProjectModalVideo;
  gallery: ProjectModalMedia[];
};

type InitProjectModalOptions = {
  projects: ProjectModalProject[];
  reduceMotion?: boolean;
};

type ModalElements = {
  modal: HTMLElement;
  backdrop: HTMLElement | null;
  panel: HTMLElement | null;
  closeButton: HTMLButtonElement | null;
  hero: HTMLElement | null;
  heroImage: HTMLImageElement | null;
  kicker: HTMLElement | null;
  title: HTMLElement | null;
  description: HTMLElement | null;
  link: HTMLAnchorElement | null;
  video: HTMLVideoElement | null;
  videoSource: HTMLSourceElement | null;
  galleryImage: HTMLImageElement | null;
  galleryCount: HTMLElement | null;
  galleryPrev: HTMLButtonElement | null;
  galleryNext: HTMLButtonElement | null;
  galleryOpen: HTMLButtonElement | null;
  lightbox: HTMLElement | null;
  lightboxShell: HTMLElement | null;
  lightboxImage: HTMLImageElement | null;
  lightboxBackdrop: HTMLElement | null;
  lightboxClose: HTMLButtonElement | null;
};

type ActiveState = {
  trigger: HTMLElement;
  project: ProjectModalProject;
};

const ROOT_SELECTOR = "[data-page='home']";

function getElements(root: ParentNode): ModalElements | null {
  const modal = root.querySelector<HTMLElement>("[data-project-modal]");
  if (!modal) {
    return null;
  }

  return {
    modal,
    backdrop: root.querySelector<HTMLElement>("[data-project-modal-backdrop]"),
    panel: root.querySelector<HTMLElement>("[data-project-modal-panel]"),
    closeButton: root.querySelector<HTMLButtonElement>("[data-project-modal-close]"),
    hero: root.querySelector<HTMLElement>("[data-project-modal-hero]"),
    heroImage: root.querySelector<HTMLImageElement>("[data-project-modal-hero-image]"),
    kicker: root.querySelector<HTMLElement>("[data-project-modal-kicker]"),
    title: root.querySelector<HTMLElement>("[data-project-modal-title]"),
    description: root.querySelector<HTMLElement>("[data-project-modal-description]"),
    link: root.querySelector<HTMLAnchorElement>("[data-project-modal-link]"),
    video: root.querySelector<HTMLVideoElement>("[data-project-modal-video]"),
    videoSource: root.querySelector<HTMLSourceElement>("[data-project-modal-video-source]"),
    galleryImage: root.querySelector<HTMLImageElement>("[data-project-modal-gallery-image]"),
    galleryCount: root.querySelector<HTMLElement>("[data-project-modal-gallery-count]"),
    galleryPrev: root.querySelector<HTMLButtonElement>("[data-project-modal-gallery-prev]"),
    galleryNext: root.querySelector<HTMLButtonElement>("[data-project-modal-gallery-next]"),
    galleryOpen: root.querySelector<HTMLButtonElement>("[data-project-modal-gallery-open]"),
    lightbox: document.querySelector<HTMLElement>("[data-project-lightbox]"),
    lightboxShell: document.querySelector<HTMLElement>(".project-lightbox-shell"),
    lightboxImage: document.querySelector<HTMLImageElement>("[data-project-lightbox-image]"),
    lightboxBackdrop: document.querySelector<HTMLElement>("[data-project-lightbox-backdrop]"),
    lightboxClose: document.querySelector<HTMLButtonElement>("[data-project-lightbox-close]"),
  };
}

function syncGalleryFrame(elements: ModalElements, project: ProjectModalProject, galleryIndex: number) {
  const galleryItem = project.gallery[galleryIndex];
  if (elements.galleryImage) {
    elements.galleryImage.src = galleryItem?.src ?? "";
    elements.galleryImage.alt = galleryItem?.alt ?? "";
  }

  if (elements.galleryCount) {
    elements.galleryCount.textContent = `${galleryIndex + 1} / ${project.gallery.length}`;
  }
}

function fillModal(elements: ModalElements, project: ProjectModalProject, galleryIndex: number) {
  if (elements.heroImage) {
    elements.heroImage.src = project.image;
    elements.heroImage.alt = project.alt;
  }

  if (elements.kicker) {
    elements.kicker.textContent = project.subtitle;
  }

  if (elements.title) {
    elements.title.textContent = project.title;
  }

  if (elements.description) {
    elements.description.textContent = project.description;
  }

  if (elements.link) {
    elements.link.href = project.url;
    elements.link.target = "_blank";
    elements.link.rel = "noreferrer";
  }

  if (elements.video) {
    elements.video.poster = project.caseVideo.poster;
    elements.video.setAttribute("aria-label", project.caseVideo.title);
  }

  if (elements.videoSource) {
    elements.videoSource.src = project.caseVideo.src;
  }

  syncGalleryFrame(elements, project, galleryIndex);

  elements.video?.load();
}

function startVideo(elements: ModalElements) {
  const playPromise = elements.video?.play();
  if (playPromise && "catch" in playPromise) {
    playPromise.catch(() => {});
  }
}

function stopVideo(elements: ModalElements) {
  if (!elements.video) {
    return;
  }

  elements.video.pause();
  elements.video.currentTime = 0;
}

function createImageClone(origin: HTMLElement, src: string, className = "project-modal-clone") {
  const rect = origin.getBoundingClientRect();
  const clone = document.createElement("img");
  clone.src = src;
  clone.alt = "";
  clone.setAttribute("aria-hidden", "true");
  clone.className = className;
  Object.assign(clone.style, {
    position: "fixed",
    top: `${rect.top}px`,
    left: `${rect.left}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
  });

  document.body.append(clone);
  return { clone, rect };
}

function getOriginMedia(trigger: HTMLElement) {
  return (
    trigger.querySelector<HTMLElement>("[data-project-origin]") ??
    trigger.querySelector<HTMLElement>(".project-media") ??
    trigger
  );
}

function createFloatingImage(origin: HTMLElement, project: ProjectModalProject) {
  return createImageClone(origin, project.image);
}

function measureHeroRect(elements: ModalElements) {
  if (!elements.panel || !elements.hero) {
    return null;
  }

  gsap.set(elements.panel, {
    autoAlpha: 1,
    y: 0,
    visibility: "hidden",
  });

  const rect = elements.hero.getBoundingClientRect();

  gsap.set(elements.panel, {
    clearProps: "visibility",
  });

  return rect;
}

export function initProjectModal({ projects, reduceMotion = false }: InitProjectModalOptions) {
  const root = document.querySelector(ROOT_SELECTOR) ?? document;
  const elements = getElements(root);
  if (!elements) {
    return () => {};
  }

  const projectMap = new Map(projects.map((project) => [project.id, project]));
  const triggers = Array.from(root.querySelectorAll<HTMLElement>("[data-project-trigger]"));
  const cleanupCallbacks: Array<() => void> = [];
  let activeState: ActiveState | null = null;
  let activeTimeline: gsap.core.Timeline | null = null;
  let floatingImage: HTMLImageElement | null = null;
  let activeGalleryIndex = 0;
  let isLightboxOpen = false;
  let galleryAutoplay: number | null = null;
  let galleryTween: gsap.core.Timeline | null = null;
  let lightboxTween: gsap.core.Timeline | null = null;
  let lightboxClone: HTMLImageElement | null = null;

  const stopActiveAnimation = () => {
    activeTimeline?.kill();
    activeTimeline = null;
    floatingImage?.remove();
    floatingImage = null;
  };

  const stopGalleryAutoplay = () => {
    if (galleryAutoplay !== null) {
      window.clearTimeout(galleryAutoplay);
      galleryAutoplay = null;
    }
  };

  const stopGalleryTween = () => {
    galleryTween?.kill();
    galleryTween = null;
  };

  const stopLightboxTween = () => {
    lightboxTween?.kill();
    lightboxTween = null;
    lightboxClone?.remove();
    lightboxClone = null;
  };

  const queueGalleryAutoplay = () => {
    stopGalleryAutoplay();

    if (!activeState || isLightboxOpen || activeState.project.gallery.length <= 1) {
      return;
    }

    galleryAutoplay = window.setTimeout(() => {
      animateGalleryTo(activeGalleryIndex + 1, 1);
    }, 3000);
  };

  const openLightbox = () => {
    if (!activeState || !elements.lightbox || !elements.lightboxImage || !elements.galleryImage) {
      return;
    }

    const item = activeState.project.gallery[activeGalleryIndex];
    if (!item) {
      return;
    }

    elements.lightboxImage.src = item.src;
    elements.lightboxImage.alt = item.alt;
    stopGalleryAutoplay();

    elements.lightbox.hidden = false;
    elements.lightbox.setAttribute("aria-hidden", "false");
    isLightboxOpen = true;

    if (reduceMotion || !elements.lightboxShell) {
      return;
    }

    stopLightboxTween();

    const { clone } = createImageClone(elements.galleryImage, item.src, "project-lightbox-clone");
    lightboxClone = clone;

    gsap.set(elements.lightboxBackdrop, { autoAlpha: 0 });
    gsap.set(elements.lightboxShell, { autoAlpha: 0 });
    gsap.set(elements.lightboxImage, { autoAlpha: 0 });
    gsap.set(elements.lightboxShell, {
      autoAlpha: 1,
      visibility: "hidden",
    });

    const targetRect = elements.lightboxImage.getBoundingClientRect();

    gsap.set(elements.lightboxShell, {
      autoAlpha: 0,
      clearProps: "visibility",
    });

    lightboxTween = gsap.timeline({
      defaults: {
        ease: "power3.inOut",
      },
      onComplete: () => {
        gsap.set(elements.lightboxImage, { autoAlpha: 1, clearProps: "opacity" });
        stopLightboxTween();
      },
    });

    lightboxTween
      .to(elements.lightboxBackdrop, { autoAlpha: 1, duration: 0.28 }, 0)
      .to(
        clone,
        {
          top: targetRect.top,
          left: targetRect.left,
          width: targetRect.width,
          height: targetRect.height,
          duration: 0.62,
        },
        0,
      )
      .to(elements.lightboxShell, { autoAlpha: 1, duration: 0.32 }, 0.14);
  };

  const closeLightbox = () => {
    if (!elements.lightbox) {
      return;
    }

    if (!reduceMotion && elements.lightboxImage && elements.galleryImage && elements.lightboxShell) {
      stopLightboxTween();

      const { clone } = createImageClone(
        elements.lightboxImage,
        elements.lightboxImage.currentSrc || elements.lightboxImage.src,
        "project-lightbox-clone",
      );
      lightboxClone = clone;
      const targetRect = elements.galleryImage.getBoundingClientRect();

      gsap.set(elements.lightboxImage, { autoAlpha: 0 });

      lightboxTween = gsap.timeline({
        defaults: {
          ease: "power3.inOut",
        },
        onComplete: () => {
          elements.lightbox.hidden = true;
          elements.lightbox.setAttribute("aria-hidden", "true");
          isLightboxOpen = false;
          stopLightboxTween();
          queueGalleryAutoplay();
        },
      });

      lightboxTween
        .to(elements.lightboxShell, { autoAlpha: 0, duration: 0.2 }, 0)
        .to(elements.lightboxBackdrop, { autoAlpha: 0, duration: 0.24 }, 0)
        .to(
          clone,
          {
            top: targetRect.top,
            left: targetRect.left,
            width: targetRect.width,
            height: targetRect.height,
            duration: 0.56,
          },
          0,
        );

      return;
    }

    elements.lightbox.hidden = true;
    elements.lightbox.setAttribute("aria-hidden", "true");
    isLightboxOpen = false;
    queueGalleryAutoplay();
  };

  const syncGallery = () => {
    if (!activeState) {
      return;
    }

    const total = activeState.project.gallery.length || 1;
    activeGalleryIndex = ((activeGalleryIndex % total) + total) % total;
    syncGalleryFrame(elements, activeState.project, activeGalleryIndex);
  };

  const animateGalleryTo = (nextIndex: number, direction: 1 | -1) => {
    if (!activeState || !elements.galleryImage) {
      return;
    }

    const total = activeState.project.gallery.length || 1;
    if (total <= 1) {
      return;
    }

    stopGalleryAutoplay();
    stopGalleryTween();

    const currentImage = elements.galleryImage;
    const targetIndex = ((nextIndex % total) + total) % total;

    if (reduceMotion) {
      activeGalleryIndex = targetIndex;
      syncGallery();
      queueGalleryAutoplay();
      return;
    }

    galleryTween = gsap.timeline({
      defaults: {
        ease: "power2.inOut",
      },
      onComplete: () => {
        galleryTween = null;
        queueGalleryAutoplay();
      },
    });

    galleryTween
      .to(currentImage, {
        xPercent: direction > 0 ? -8 : 8,
        autoAlpha: 0,
        duration: 0.3,
      })
      .add(() => {
        activeGalleryIndex = targetIndex;
        syncGallery();
        gsap.set(currentImage, {
          xPercent: direction > 0 ? 8 : -8,
        });
      })
      .to(currentImage, {
        xPercent: 0,
        autoAlpha: 1,
        duration: 0.46,
        ease: "power3.out",
      });
  };

  const closeModal = () => {
    if (!activeState) {
      return;
    }

    closeLightbox();
    stopActiveAnimation();
    stopGalleryAutoplay();
    stopGalleryTween();
    stopLightboxTween();

    if (reduceMotion || !elements.hero || !elements.panel) {
      stopVideo(elements);
      elements.modal.hidden = true;
      elements.modal.setAttribute("aria-hidden", "true");
      activeState.trigger.classList.remove("is-project-active");
      activeState.trigger.focus();
      activeState = null;
      return;
    }

    const origin = getOriginMedia(activeState.trigger);
    const originRect = origin.getBoundingClientRect();
    const heroRect = elements.hero.getBoundingClientRect();
    const clone = document.createElement("img");
    clone.src = activeState.project.image;
    clone.alt = "";
    clone.setAttribute("aria-hidden", "true");
    clone.className = "project-modal-clone";
    document.body.append(clone);
    floatingImage = clone;

    gsap.set(clone, {
      position: "fixed",
      top: heroRect.top,
      left: heroRect.left,
      width: heroRect.width,
      height: heroRect.height,
    });

    activeTimeline = gsap.timeline({
      defaults: {
        ease: "power3.inOut",
      },
      onComplete: () => {
        stopVideo(elements);
        elements.modal.hidden = true;
        elements.modal.setAttribute("aria-hidden", "true");
        activeState?.trigger.classList.remove("is-project-active");
        activeState?.trigger.focus();
        stopActiveAnimation();
        activeState = null;
      },
    });

    activeTimeline
      .to(elements.panel, { autoAlpha: 0, y: 18, duration: 0.24 }, 0)
      .to(elements.backdrop, { autoAlpha: 0, duration: 0.22 }, 0)
      .to(
        clone,
        {
          top: originRect.top,
          left: originRect.left,
          width: originRect.width,
          height: originRect.height,
          borderRadius: 0,
          duration: 0.64,
        },
        0,
      );
  };

  const openModal = (trigger: HTMLElement, project: ProjectModalProject) => {
    stopActiveAnimation();
    activeState?.trigger.classList.remove("is-project-active");
    activeState = { trigger, project };
    trigger.classList.add("is-project-active");
    activeGalleryIndex = 0;

    fillModal(elements, project, activeGalleryIndex);
    elements.modal.hidden = false;
    elements.modal.setAttribute("aria-hidden", "false");
    if (reduceMotion || !elements.hero || !elements.panel) {
      gsap.set([elements.backdrop, elements.panel], { clearProps: "all" });
      startVideo(elements);
      queueGalleryAutoplay();
      trigger.blur();
      return;
    }

    const origin = getOriginMedia(trigger);
    const { clone } = createFloatingImage(origin, project);
    const heroRect = measureHeroRect(elements) ?? elements.hero.getBoundingClientRect();
    floatingImage = clone;

    gsap.set(elements.backdrop, { autoAlpha: 0 });
    gsap.set(elements.panel, { autoAlpha: 0, y: 28 });
    gsap.set(elements.heroImage, { autoAlpha: 0 });

    activeTimeline = gsap.timeline({
      defaults: {
        ease: "power3.inOut",
      },
      onComplete: () => {
        gsap.set(elements.heroImage, { autoAlpha: 1, clearProps: "opacity" });
        startVideo(elements);
        queueGalleryAutoplay();
        stopActiveAnimation();
      },
    });

    activeTimeline
      .to(elements.backdrop, { autoAlpha: 1, duration: 0.26 }, 0)
      .to(
        clone,
        {
          top: heroRect.top,
          left: heroRect.left,
          width: heroRect.width,
          height: heroRect.height,
          borderRadius: 0,
          duration: 0.72,
        },
        0,
      )
      .to(
        elements.panel,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.44,
          ease: "power2.out",
        },
        0.18,
      );

    trigger.blur();
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && isLightboxOpen) {
      closeLightbox();
      return;
    }

    if (event.key === "Escape") {
      closeModal();
    }
  };

  triggers.forEach((trigger) => {
    const projectId = trigger.dataset.projectId;
    const project = projectId ? projectMap.get(projectId) : undefined;
    if (!project) {
      return;
    }

    const handleClick = () => openModal(trigger, project);
    trigger.addEventListener("click", handleClick);
    cleanupCallbacks.push(() => trigger.removeEventListener("click", handleClick));
  });

  const closeTargets = [elements.backdrop, elements.closeButton].filter(Boolean) as HTMLElement[];
  closeTargets.forEach((target) => {
    const handleClick = () => closeModal();
    target.addEventListener("click", handleClick);
    cleanupCallbacks.push(() => target.removeEventListener("click", handleClick));
  });

  const handleGalleryPrev = () => {
    animateGalleryTo(activeGalleryIndex - 1, -1);
  };
  elements.galleryPrev?.addEventListener("click", handleGalleryPrev);
  cleanupCallbacks.push(() => elements.galleryPrev?.removeEventListener("click", handleGalleryPrev));

  const handleGalleryNext = () => {
    animateGalleryTo(activeGalleryIndex + 1, 1);
  };
  elements.galleryNext?.addEventListener("click", handleGalleryNext);
  cleanupCallbacks.push(() => elements.galleryNext?.removeEventListener("click", handleGalleryNext));

  elements.galleryOpen?.addEventListener("click", openLightbox);
  cleanupCallbacks.push(() => elements.galleryOpen?.removeEventListener("click", openLightbox));

  [elements.lightboxBackdrop, elements.lightboxClose].filter(Boolean).forEach((target) => {
    const handleClick = () => closeLightbox();
    target?.addEventListener("click", handleClick);
    cleanupCallbacks.push(() => target?.removeEventListener("click", handleClick));
  });

  document.addEventListener("keydown", handleKeydown);
  cleanupCallbacks.push(() => document.removeEventListener("keydown", handleKeydown));

  return () => {
    stopActiveAnimation();
    stopGalleryAutoplay();
    stopGalleryTween();
    stopLightboxTween();
    activeState?.trigger.classList.remove("is-project-active");
    activeState = null;
    stopVideo(elements);
    elements.modal.hidden = true;
    elements.modal.setAttribute("aria-hidden", "true");
    closeLightbox();
    cleanupCallbacks.forEach((callback) => callback());
  };
}

export function initProjectModalFromDom() {
  const dataElement = document.querySelector<HTMLScriptElement>("[data-project-modal-data]");
  if (!dataElement?.textContent) {
    return () => {};
  }

  const parsed = JSON.parse(dataElement.textContent) as ProjectModalProject[];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return initProjectModal({ projects: parsed, reduceMotion });
}
