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
  gallery: HTMLImageElement[];
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
    gallery: Array.from(root.querySelectorAll<HTMLImageElement>("[data-project-modal-gallery-image]")),
  };
}

function fillModal(elements: ModalElements, project: ProjectModalProject) {
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

  elements.gallery.forEach((item, index) => {
    const media = project.gallery[index];
    item.src = media?.src ?? "";
    item.alt = media?.alt ?? "";
  });

  elements.video?.load();
}

function getOriginMedia(trigger: HTMLElement) {
  return (
    trigger.querySelector<HTMLElement>("[data-project-origin]") ??
    trigger.querySelector<HTMLElement>(".project-media") ??
    trigger
  );
}

function createFloatingImage(origin: HTMLElement, project: ProjectModalProject) {
  const rect = origin.getBoundingClientRect();
  const clone = document.createElement("img");
  clone.src = project.image;
  clone.alt = "";
  clone.setAttribute("aria-hidden", "true");
  clone.className = "project-modal-clone";
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

  const stopActiveAnimation = () => {
    activeTimeline?.kill();
    activeTimeline = null;
    floatingImage?.remove();
    floatingImage = null;
  };

  const closeModal = () => {
    if (!activeState) {
      return;
    }

    stopActiveAnimation();

    if (reduceMotion || !elements.hero || !elements.panel) {
      elements.modal.hidden = true;
      elements.modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("project-modal-open");
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
        elements.modal.hidden = true;
        elements.modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("project-modal-open");
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

    fillModal(elements, project);
    elements.modal.hidden = false;
    elements.modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("project-modal-open");

    if (reduceMotion || !elements.hero || !elements.panel) {
      gsap.set([elements.backdrop, elements.panel], { clearProps: "all" });
      trigger.blur();
      return;
    }

    const origin = getOriginMedia(trigger);
    const { clone } = createFloatingImage(origin, project);
    const heroRect = elements.hero.getBoundingClientRect();
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

  document.addEventListener("keydown", handleKeydown);
  cleanupCallbacks.push(() => document.removeEventListener("keydown", handleKeydown));

  return () => {
    stopActiveAnimation();
    activeState?.trigger.classList.remove("is-project-active");
    activeState = null;
    document.body.classList.remove("project-modal-open");
    elements.modal.hidden = true;
    elements.modal.setAttribute("aria-hidden", "true");
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
