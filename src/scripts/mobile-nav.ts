import gsap from 'gsap';

declare global {
  interface Window {
    __mobileNavCleanup__?: () => void;
  }
}

export function cleanupMobileNav() {
  window.__mobileNavCleanup__?.();
}

export function initMobileNav(root: ParentNode = document) {
  cleanupMobileNav();

  const menuToggle = root.querySelector('#site-nav-toggle');
  const mobileNav = root.querySelector('[data-mobile-nav]');
  const mobileNavBar = root.querySelector('[data-mobile-nav-bar]');
  const mobileNavMenu = root.querySelector('[data-mobile-nav-menu]');
  const mobileMenuContent = root.querySelector('[data-mobile-menu-content]');
  const mobileLinks = root.querySelectorAll('[data-mobile-menu-link]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const cleanupCallbacks: Array<() => void> = [];
  let menuTween: gsap.core.Timeline | undefined;
  let menuOpenHeight = 0;

  const isMobileViewport = () => window.innerWidth <= 767;
  const setScrollLock = (locked: boolean) => {
    document.body.classList.toggle('menu-open', locked);
  };

  const clearMenuTween = () => {
    menuTween?.kill();
    menuTween = undefined;
  };

  const syncToggle = (open: boolean) => {
    if (menuToggle instanceof HTMLInputElement) {
      menuToggle.checked = open;
    }
  };

  const setMenuOpenClass = (open: boolean) => {
    if (mobileNav instanceof HTMLElement) {
      mobileNav.classList.toggle('is-menu-open', open);
    }
  };

  const setMenuActiveClass = (active: boolean) => {
    if (mobileNav instanceof HTMLElement) {
      mobileNav.classList.toggle('is-menu-active', active);
    }
  };

  const resetDesktopMenuState = () => {
    if (
      !(mobileNav instanceof HTMLElement) ||
      !(mobileNavMenu instanceof HTMLElement) ||
      !(mobileMenuContent instanceof HTMLElement)
    ) {
      return;
    }

    clearMenuTween();
    syncToggle(false);
    setMenuActiveClass(false);
    setMenuOpenClass(false);
    setScrollLock(false);
    gsap.set([mobileNav, mobileNavMenu, mobileMenuContent], {
      clearProps: 'all',
    });
  };

  const animateMenu = (open: boolean, immediate = false) => {
    if (
      !(menuToggle instanceof HTMLInputElement) ||
      !(mobileNav instanceof HTMLElement) ||
      !(mobileNavBar instanceof HTMLElement) ||
      !(mobileNavMenu instanceof HTMLElement) ||
      !(mobileMenuContent instanceof HTMLElement)
    ) {
      return;
    }

    if (!isMobileViewport()) {
      resetDesktopMenuState();
      return;
    }

    clearMenuTween();

    if (reduceMotion.matches || immediate) {
      syncToggle(open);
      setMenuActiveClass(open);
      setMenuOpenClass(open);
      setScrollLock(open);

      if (open) {
        gsap.set(mobileNavMenu, { display: 'flex' });
        gsap.set(mobileNavMenu, { height: 'auto' });
        gsap.set(mobileMenuContent, { display: 'flex', autoAlpha: 1, y: 0 });
      } else {
        gsap.set(mobileMenuContent, { autoAlpha: 0 });
        gsap.set(mobileMenuContent, { clearProps: 'all' });
        gsap.set(mobileNavMenu, { clearProps: 'all' });
      }

      return;
    }

    const getOpenMenuHeight = () => {
      gsap.set(mobileNavMenu, { display: 'flex', height: 'auto' });
      gsap.set(mobileMenuContent, {
        display: 'flex',
        clearProps: 'all',
        maxHeight: 'none',
      });

      const navTop = mobileNav.getBoundingClientRect().top;
      const availableHeight = Math.max(
        window.innerHeight - navTop - mobileNavBar.offsetHeight - 24,
        160,
      );
      const contentHeight = mobileMenuContent.scrollHeight;
      const targetHeight = Math.max(Math.min(contentHeight, availableHeight), 160);

      gsap.set(mobileMenuContent, { maxHeight: targetHeight });
      return targetHeight;
    };

    if (open) {
      syncToggle(true);
      setMenuActiveClass(true);
      setMenuOpenClass(true);
      setScrollLock(true);
      menuOpenHeight = getOpenMenuHeight();

      gsap.set(mobileNavMenu, { display: 'flex', height: 0 });
      gsap.set(mobileMenuContent, {
        display: 'flex',
        autoAlpha: 0,
        y: 24,
        maxHeight: menuOpenHeight,
      });

      menuTween = gsap.timeline({
        defaults: { ease: 'power3.inOut' },
      });

      menuTween
        .to(mobileNavMenu, {
          height: menuOpenHeight,
          duration: 0.42,
        })
        .to(
          mobileMenuContent,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.26,
            ease: 'power2.out',
            clearProps: 'y',
          },
          0.1,
        );

      return;
    }

    syncToggle(false);
    setMenuOpenClass(false);
    gsap.set(mobileNavMenu, { height: mobileNavMenu.offsetHeight });

    menuTween = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      onComplete: () => {
        setMenuActiveClass(false);
        setScrollLock(false);
        gsap.set(mobileMenuContent, { clearProps: 'all' });
        gsap.set(mobileNavMenu, { clearProps: 'all' });
      },
    });

    menuTween
      .to(mobileMenuContent, {
        autoAlpha: 0,
        y: 18,
        duration: 0.16,
        ease: 'power2.in',
      })
      .to(
        mobileNavMenu,
        {
          height: 0,
          duration: 0.34,
        },
        0,
      );
  };

  if (!(menuToggle instanceof HTMLInputElement)) {
    return () => {};
  }

  const handleChange = () => animateMenu(menuToggle.checked);
  menuToggle.addEventListener('change', handleChange);
  cleanupCallbacks.push(() => menuToggle.removeEventListener('change', handleChange));

  mobileLinks.forEach((link) => {
    const handleClick = () => animateMenu(false);
    link.addEventListener('click', handleClick);
    cleanupCallbacks.push(() => link.removeEventListener('click', handleClick));
  });

  const handleKeydown = (event: KeyboardEvent) => {
    if (
      event.key === 'Escape' &&
      mobileNav instanceof HTMLElement &&
      mobileNav.classList.contains('is-menu-active')
    ) {
      animateMenu(false);
    }
  };
  document.addEventListener('keydown', handleKeydown);
  cleanupCallbacks.push(() => document.removeEventListener('keydown', handleKeydown));

  const handleResize = () => {
    if (!isMobileViewport()) {
      resetDesktopMenuState();
      return;
    }

    if (
      mobileNav instanceof HTMLElement &&
      mobileNav.classList.contains('is-menu-active')
    ) {
      menuOpenHeight = Math.max(
        Math.min(
          mobileMenuContent instanceof HTMLElement
            ? mobileMenuContent.scrollHeight
            : 0,
          Math.max(
            window.innerHeight -
              mobileNav.getBoundingClientRect().top -
              (mobileNavBar instanceof HTMLElement ? mobileNavBar.offsetHeight : 0) -
              24,
            160,
          ),
        ),
        160,
      );
      gsap.set(mobileNavMenu, { height: menuOpenHeight });
      if (mobileMenuContent instanceof HTMLElement) {
        gsap.set(mobileMenuContent, { maxHeight: menuOpenHeight });
      }
    }
  };
  window.addEventListener('resize', handleResize);
  cleanupCallbacks.push(() => window.removeEventListener('resize', handleResize));

  window.__mobileNavCleanup__ = () => {
    syncToggle(false);
    setMenuActiveClass(false);
    setMenuOpenClass(false);
    setScrollLock(false);
    clearMenuTween();
    cleanupCallbacks.forEach((callback) => callback());
    delete window.__mobileNavCleanup__;
  };

  animateMenu(menuToggle.checked, true);

  return window.__mobileNavCleanup__;
}
