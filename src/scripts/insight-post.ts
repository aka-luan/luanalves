type Cleanup = () => void;

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
