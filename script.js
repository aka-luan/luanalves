const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

document.addEventListener("DOMContentLoaded", () => {
  initHeaderState();
  initRevealObserver();
  initFocusSwitcher();
  initPortfolioCarousel();
  initScenes();
});

function initHeaderState() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const sync = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  };

  sync();
  window.addEventListener("scroll", sync, { passive: true });
}

function initRevealObserver() {
  const targets = document.querySelectorAll("[data-reveal]");
  if (!targets.length || prefersReducedMotion) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  targets.forEach((target) => observer.observe(target));
}

function initFocusSwitcher() {
  const items = document.querySelectorAll(".focus-item");
  const name = document.querySelector("#focus-name");
  const description = document.querySelector("#focus-description");
  const index = document.querySelector("#focus-index");

  if (!items.length || !name || !description || !index) return;

  const setActive = (target) => {
    items.forEach((item) => item.classList.toggle("is-active", item === target));
    name.textContent = target.textContent.trim();
    description.textContent = target.dataset.description || "";
    index.textContent = target.dataset.index || "";
  };

  items.forEach((item) => {
    item.addEventListener("mouseenter", () => setActive(item));
    item.addEventListener("focus", () => setActive(item));
    item.addEventListener("click", () => setActive(item));
  });
}

function initPortfolioCarousel() {
  const cards = Array.from(document.querySelectorAll(".portfolio-card"));
  const buttons = document.querySelectorAll(".portfolio-button");
  const current = document.querySelector("#portfolio-current");

  if (!cards.length || !buttons.length || !current) return;

  let activeIndex = 0;

  const syncCards = () => {
    cards.forEach((card, index) => {
      const offset = index - activeIndex;
      const absOffset = Math.abs(offset);
      const translateX = clamp(offset * 31, -62, 62);
      const scale = offset === 0 ? 1 : absOffset === 1 ? 0.73 : 0.56;
      const opacity = offset === 0 ? 1 : absOffset === 1 ? 0.34 : 0.14;
      const zIndex = cards.length - absOffset;
      const accent = card.dataset.accent || "#f6f6f2";
      const ink = card.dataset.ink || "#111111";

      card.classList.toggle("is-active", index === activeIndex);
      card.style.transform = `translateX(${translateX}%) scale(${scale})`;
      card.style.opacity = opacity.toString();
      card.style.zIndex = zIndex.toString();
      card.style.backgroundColor =
        index === activeIndex ? accent : "rgba(255,255,255,0.58)";
      card.style.color =
        index === activeIndex ? ink : "rgba(17,17,17,0.36)";
    });

    current.textContent = String(activeIndex + 1).padStart(2, "0");
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const delta = Number(button.dataset.direction || 0);
      activeIndex = (activeIndex + delta + cards.length) % cards.length;
      syncCards();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      activeIndex = (activeIndex + 1) % cards.length;
      syncCards();
    }

    if (event.key === "ArrowLeft") {
      activeIndex = (activeIndex - 1 + cards.length) % cards.length;
      syncCards();
    }
  });

  syncCards();
}

function initScenes() {
  mountScene('[data-scene="hero"]', renderHeroTunnel);
  mountScene('[data-scene="founders"]', renderFoundersField);
  mountScene('[data-scene="focus"]', renderFocusField);
  mountScene('[data-scene="partners"]', renderPartnerMesh);
  mountScene('[data-scene="cta"]', renderCtaOrbit);
}

function mountScene(selector, draw) {
  const canvas = document.querySelector(selector);
  if (!canvas) return;

  const context = canvas.getContext("2d");
  if (!context) return;

  let animationFrame = 0;
  let width = 0;
  let height = 0;
  let dpr = 1;

  const resize = () => {
    const bounds = canvas.getBoundingClientRect();
    width = Math.max(1, Math.floor(bounds.width));
    height = Math.max(1, Math.floor(bounds.height));
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (prefersReducedMotion) {
      draw(context, width, height, 0);
    }
  };

  const tick = (time) => {
    draw(context, width, height, time * 0.001);
    animationFrame = window.requestAnimationFrame(tick);
  };

  resize();
  window.addEventListener("resize", resize, { passive: true });

  if (!prefersReducedMotion) {
    animationFrame = window.requestAnimationFrame(tick);
  }
}

function renderHeroTunnel(context, width, height, time) {
  context.clearRect(0, 0, width, height);

  const centerX = width * 0.58;
  const centerY = height * 0.47;
  const rings = 52;
  const spokes = 34;

  for (let ring = 0; ring < rings; ring += 1) {
    const progress = (ring / rings + time * 0.06) % 1;
    const depth = 1 - progress;
    const radiusX = width * (0.06 + depth * 0.3);
    const radiusY = height * (0.05 + depth * 0.22);
    const spin = time * 0.45 + progress * 7.5;

    for (let spoke = 0; spoke < spokes; spoke += 1) {
      const angle = (spoke / spokes) * Math.PI * 2 + spin;
      const warp = 1 + Math.sin(angle * 3 + time * 0.5) * 0.08;
      const x = centerX + Math.cos(angle) * radiusX * warp;
      const y =
        centerY +
        Math.sin(angle) * radiusY +
        Math.sin(progress * 14 + time) * depth * 26;
      const size = 0.7 + depth * 2.6;
      const alpha = clamp(depth * depth * 1.15, 0, 0.92);

      context.fillStyle = `rgba(231, 231, 231, ${alpha})`;
      context.beginPath();
      context.arc(x, y, size, 0, Math.PI * 2);
      context.fill();
    }
  }
}

function renderFoundersField(context, width, height, time) {
  context.clearRect(0, 0, width, height);

  const columns = Math.max(18, Math.floor(width / 56));
  const rows = Math.max(14, Math.floor(height / 54));
  const startX = width * 0.48;
  const endX = width * 0.97;
  const startY = height * 0.08;
  const endY = height * 0.92;

  for (let row = 0; row <= rows; row += 1) {
    for (let column = 0; column <= columns; column += 1) {
      const tx = column / columns;
      const ty = row / rows;
      const x = lerp(startX, endX, tx);
      const baseY = lerp(startY, endY, ty);
      const focus = Math.exp(-Math.pow((tx - 0.12) * 3.2, 2));
      const wave =
        Math.sin(tx * 8 + time * 1.2) * 28 * focus +
        Math.cos(ty * 6 + time * 0.8) * 14;
      const y = baseY + wave;
      const radius = 0.7 + focus * 1.8 + Math.sin(time + tx * 4 + ty) * 0.1;
      const alpha = 0.18 + focus * 0.34;

      context.fillStyle = `rgba(231, 231, 231, ${alpha})`;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    }
  }
}

function renderFocusField(context, width, height, time) {
  context.clearRect(0, 0, width, height);

  const stepX = Math.max(24, width / 46);
  const stepY = Math.max(24, height / 30);
  const centerY = height * 0.34;
  const leftFocus = width * 0.36;
  const rightFocus = width * 0.64;

  for (let x = -stepX; x <= width + stepX; x += stepX) {
    for (let y = -stepY; y <= height + stepY; y += stepY) {
      const dxLeft = Math.abs(x - leftFocus) / width;
      const dxRight = Math.abs(x - rightFocus) / width;
      const blend = Math.max(
        Math.exp(-dxLeft * 8),
        Math.exp(-dxRight * 8),
      );
      const distanceY = Math.abs(y - centerY) / height;
      const wave =
        Math.sin(x * 0.01 + time * 0.8) * 42 * blend -
        Math.cos(y * 0.012 + time * 0.55) * 18;
      const drift = (blend - distanceY) * 34;
      const drawY = y + wave + drift;
      const radius = 0.8 + blend * 1.8;
      const alpha = clamp(0.08 + blend * 0.22 - distanceY * 0.04, 0.05, 0.36);

      context.fillStyle = `rgba(17, 17, 17, ${alpha})`;
      context.beginPath();
      context.arc(x, drawY, radius, 0, Math.PI * 2);
      context.fill();
    }
  }
}

function renderPartnerMesh(context, width, height, time) {
  context.clearRect(0, 0, width, height);

  const columns = Math.max(26, Math.floor(width / 24));
  const rows = Math.max(14, Math.floor(height / 20));
  const startX = width * 0.06;
  const endX = width * 0.96;
  const startY = height * 0.22;
  const endY = height * 0.86;

  for (let row = 0; row <= rows; row += 1) {
    for (let column = 0; column <= columns; column += 1) {
      const tx = column / columns;
      const ty = row / rows;
      const x = lerp(startX, endX, tx);
      const y = lerp(startY, endY, ty);
      const ridge =
        Math.sin(tx * 7 - time * 0.8) * 22 +
        Math.cos(ty * 9 + time * 1.05) * 18 +
        Math.sin((tx + ty) * 10 + time * 0.7) * 12;
      const perspective = Math.pow(Math.sin(tx * Math.PI), 1.5);
      const drawY = y + ridge * perspective;
      const radius = 0.7 + perspective * 1.7;
      const alpha = 0.18 + perspective * 0.55;

      context.fillStyle = `rgba(231, 231, 231, ${alpha})`;
      context.beginPath();
      context.arc(x, drawY, radius, 0, Math.PI * 2);
      context.fill();
    }
  }
}

function renderCtaOrbit(context, width, height, time) {
  context.clearRect(0, 0, width, height);

  const centerX = width * 0.08;
  const centerY = height * 0.92;
  const rings = 24;
  const spokes = 28;

  for (let ring = 0; ring < rings; ring += 1) {
    const radius = width * (0.04 + ring * 0.035);
    const fade = 1 - ring / rings;

    for (let spoke = 0; spoke < spokes; spoke += 1) {
      const angleBase = -1.35 + (spoke / (spokes - 1)) * 1.45;
      const angle = angleBase + Math.sin(time * 0.35 + ring * 0.22) * 0.03;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY - Math.sin(angle) * radius * 0.86;
      const radiusDot = 0.9 + fade * 2.1;
      const alpha = 0.12 + fade * 0.55;

      context.fillStyle = `rgba(231, 231, 231, ${alpha})`;
      context.beginPath();
      context.arc(x, y, radiusDot, 0, Math.PI * 2);
      context.fill();
    }
  }
}

function lerp(start, end, progress) {
  return start + (end - start) * progress;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
