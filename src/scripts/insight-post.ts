import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Cleanup = () => void;

gsap.registerPlugin(ScrollTrigger);

function getShareUrl(root: ParentNode) {
  const canonical = document.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );
  const configuredUrl = root.querySelector<HTMLElement>('[data-insight-post]')
    ?.dataset.url;

  return configuredUrl ?? canonical?.href ?? window.location.href;
}

function setProgress(progressBar: HTMLElement) {
  const scrollTop = window.scrollY;
  const maxScroll = Math.max(
    document.documentElement.scrollHeight - window.innerHeight,
    1,
  );
  const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);

  progressBar.style.transform = `scaleX(${progress})`;
}

function revealNow(elements: Element[]) {
  elements.forEach((element) => {
    gsap.set(element, {
      autoAlpha: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotationX: 0,
      clearProps: 'transform,opacity,visibility,willChange',
    });
  });
}

function initInsightMotion(page: HTMLElement, reduceMotion: MediaQueryList) {
  const html = document.documentElement;
  const breadcrumb = page.querySelector<HTMLElement>('.post-breadcrumb');
  const heroEyebrow = page.querySelector<HTMLElement>(
    '.post-hero .post-eyebrow',
  );
  const heroTitle = page.querySelector<HTMLElement>('.post-hero h1');
  const heroCopy = page.querySelector<HTMLElement>(
    '.post-hero__copy > p:not(.post-eyebrow)',
  );
  const heroMeta = Array.from(page.querySelectorAll('.post-meta span'));
  const heroVisual = page.querySelector<HTMLElement>('.post-hero__visual');
  const heroImage = page.querySelector<HTMLElement>('.post-hero__visual img');
  const articleBlocks = Array.from(
    page.querySelectorAll(
      '.post-content > :is(h2, h3, p, ul, ol, blockquote, figure, .post-links)',
    ),
  );
  const sidebarItems = Array.from(
    page.querySelectorAll('.post-sidebar__panel, .post-whatsapp'),
  );
  const authorCard = page.querySelector<HTMLElement>('.author-card');
  const relatedHeader = Array.from(
    page.querySelectorAll('.related-section__header > *'),
  );
  const relatedCards = Array.from(page.querySelectorAll('.related-card'));
  const allTargets = [
    breadcrumb,
    heroEyebrow,
    heroTitle,
    heroCopy,
    ...heroMeta,
    heroVisual,
    heroImage,
    ...articleBlocks,
    ...sidebarItems,
    authorCard,
    ...relatedHeader,
    ...relatedCards,
  ].filter((element): element is Element => Boolean(element));

  if (!html.classList.contains('motion-enabled') || reduceMotion.matches) {
    revealNow(allTargets);
    return () => {};
  }

  const context = gsap.context(() => {
    gsap.set([breadcrumb, heroEyebrow, heroTitle, heroCopy].filter(Boolean), {
      autoAlpha: 0,
      y: 24,
      willChange: 'transform, opacity',
    });
    gsap.set(heroMeta, {
      autoAlpha: 0,
      y: 14,
      willChange: 'transform, opacity',
    });
    gsap.set(heroVisual, {
      autoAlpha: 0,
      y: 36,
      scale: 0.985,
      willChange: 'transform, opacity',
    });
    gsap.set(heroImage, {
      scale: 1.08,
      willChange: 'transform',
    });
    // gsap.set(articleBlocks, {
    //   autoAlpha: 0,
    //   y: 34,
    //   willChange: 'transform, opacity',
    // });
    gsap.set(sidebarItems, {
      autoAlpha: 0,
      x: 24,
      willChange: 'transform, opacity',
    });
    gsap.set(authorCard, {
      autoAlpha: 0,
      y: 30,
      willChange: 'transform, opacity',
    });
    gsap.set([...relatedHeader, ...relatedCards], {
      autoAlpha: 0,
      y: 30,
      willChange: 'transform, opacity',
    });

    gsap
      .timeline({
        defaults: {
          duration: 0.82,
          ease: 'power3.out',
        },
      })
      .to(breadcrumb, {
        autoAlpha: 1,
        y: 0,
        clearProps: 'transform,opacity,visibility,willChange',
      })
      .to(
        [heroEyebrow, heroTitle, heroCopy].filter(Boolean),
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.08,
          clearProps: 'transform,opacity,visibility,willChange',
        },
        0.1,
      )
      .to(
        heroMeta,
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.06,
          clearProps: 'transform,opacity,visibility,willChange',
        },
        0.34,
      )
      .to(
        heroVisual,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          clearProps: 'transform,opacity,visibility,willChange',
        },
        0.48,
      )
      .to(
        heroImage,
        {
          scale: 1,
          duration: 1.2,
          clearProps: 'transform,willChange',
        },
        0.5,
      );

    if (heroVisual && heroImage) {
      gsap.to(heroImage, {
        yPercent: -4,
        ease: 'none',
        scrollTrigger: {
          trigger: heroVisual,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.1,
        },
      });
    }

    // ScrollTrigger.batch(articleBlocks, {
    //   start: 'top 86%',
    //   once: true,
    //   onEnter: (batch) => {
    //     gsap.to(batch, {
    //       autoAlpha: 1,
    //       y: 0,
    //       duration: 0.72,
    //       stagger: 0.07,
    //       ease: 'power3.out',
    //       clearProps: 'transform,opacity,visibility,willChange',
    //     });
    //   },
    // });

    if (sidebarItems.length) {
      gsap.to(sidebarItems, {
        autoAlpha: 1,
        x: 0,
        duration: 0.72,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'transform,opacity,visibility,willChange',
        scrollTrigger: {
          trigger: page.querySelector('.post-layout'),
          start: 'top 78%',
          once: true,
        },
      });
    }

    if (authorCard) {
      gsap.to(authorCard, {
        autoAlpha: 1,
        y: 0,
        duration: 0.78,
        ease: 'power3.out',
        clearProps: 'transform,opacity,visibility,willChange',
        scrollTrigger: {
          trigger: authorCard,
          start: 'top 88%',
          once: true,
        },
      });
    }

    if (relatedHeader.length || relatedCards.length) {
      gsap.to([...relatedHeader, ...relatedCards], {
        autoAlpha: 1,
        y: 0,
        duration: 0.74,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'transform,opacity,visibility,willChange',
        scrollTrigger: {
          trigger: page.querySelector('.related-section'),
          start: 'top 82%',
          once: true,
        },
      });
    }
  }, page);

  ScrollTrigger.refresh();

  return () => {
    context.revert();
  };
}

export function initInsightPost(root: ParentNode = document): Cleanup {
  const page = root.querySelector<HTMLElement>('[data-insight-post]');

  if (!page) {
    return () => {};
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const progressBar = root.querySelector<HTMLElement>(
    '[data-reading-progress]',
  );
  const tocLinks = Array.from(
    root.querySelectorAll<HTMLAnchorElement>('[data-insight-toc-link]'),
  );
  const headings = tocLinks
    .map((link) => {
      const id = link.getAttribute('href')?.replace('#', '');
      return id ? root.querySelector<HTMLElement>(`#${CSS.escape(id)}`) : null;
    })
    .filter((heading): heading is HTMLElement => Boolean(heading));
  const shareButtons = Array.from(
    root.querySelectorAll<HTMLButtonElement>('[data-share-action]'),
  );
  const cleanups: Cleanup[] = [];
  let frame = 0;

  cleanups.push(initInsightMotion(page, reduceMotion));

  if (progressBar) {
    const updateProgress = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => setProgress(progressBar));
    };

    setProgress(progressBar);
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    cleanups.push(() => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    });
  }

  if (tocLinks.length && headings.length) {
    const setActiveLink = (id: string) => {
      tocLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${id}`;
        if (isActive) {
          link.setAttribute('aria-current', 'true');
          return;
        }

        link.removeAttribute('aria-current');
      });
    };
    const updateActiveFromScroll = () => {
      const activeHeading =
        headings
          .slice()
          .reverse()
          .find((heading) => heading.getBoundingClientRect().top <= 180) ??
        headings[0];

      setActiveLink(activeHeading.id);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];

        if (visible?.target instanceof HTMLElement) {
          setActiveLink(visible.target.id);
        }
      },
      {
        rootMargin: '-18% 0px -68% 0px',
        threshold: [0, 1],
      },
    );

    headings.forEach((heading) => observer.observe(heading));
    updateActiveFromScroll();
    window.addEventListener('scroll', updateActiveFromScroll, {
      passive: true,
    });
    window.addEventListener('resize', updateActiveFromScroll);
    cleanups.push(() => {
      observer.disconnect();
      window.removeEventListener('scroll', updateActiveFromScroll);
      window.removeEventListener('resize', updateActiveFromScroll);
    });

    tocLinks.forEach((link) => {
      const onClick = (event: MouseEvent) => {
        const id = link.getAttribute('href')?.replace('#', '');
        const target = id
          ? root.querySelector<HTMLElement>(`#${CSS.escape(id)}`)
          : null;

        if (!target) {
          return;
        }

        event.preventDefault();
        target.scrollIntoView({
          behavior: reduceMotion.matches ? 'instant' : 'smooth',
          block: 'start',
        });
        history.replaceState(null, '', `#${id}`);
        setActiveLink(id);
      };

      link.addEventListener('click', onClick);
      cleanups.push(() => link.removeEventListener('click', onClick));
    });
  }

  if (shareButtons.length) {
    const shareUrl = getShareUrl(root);
    const title = document.title;

    shareButtons.forEach((button) => {
      const onClick = async () => {
        const action = button.dataset.shareAction;

        if (action === 'copy') {
          try {
            await navigator.clipboard?.writeText(shareUrl);
          } catch {
            window.prompt('Copie o link do artigo:', shareUrl);
          }
          button.dataset.copied = 'true';
          window.setTimeout(() => {
            button.dataset.copied = 'false';
          }, 1800);
          return;
        }

        const shareTargets = {
          linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
          twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
        } as const;

        if (action === 'linkedin' || action === 'twitter') {
          window.open(shareTargets[action], '_blank', 'noopener,noreferrer');
        }
      };

      button.addEventListener('click', onClick);
      cleanups.push(() => button.removeEventListener('click', onClick));
    });
  }

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
}
