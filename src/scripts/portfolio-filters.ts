type Cleanup = () => void;

declare global {
  interface Window {
    __portfolioFiltersCleanup__?: Cleanup;
  }
}

export function cleanupPortfolioFilters() {
  window.__portfolioFiltersCleanup__?.();
  window.__portfolioFiltersCleanup__ = undefined;
}

export function initPortfolioFilters(root: ParentNode = document) {
  cleanupPortfolioFilters();

  const portfolioFilters = Array.from(
    root.querySelectorAll<HTMLButtonElement>('[data-portfolio-filter]'),
  );
  const portfolioCards = Array.from(
    root.querySelectorAll<HTMLElement>('[data-portfolio-card]'),
  );
  const portfolioEmpty = root.querySelector<HTMLElement>('[data-portfolio-empty]');

  if (portfolioFilters.length === 0 || portfolioCards.length === 0) {
    return () => {};
  }

  const setActiveFilter = (activeFilter: HTMLButtonElement) => {
    portfolioFilters.forEach((filter) => {
      if (filter === activeFilter) {
        filter.setAttribute('aria-current', 'true');
        return;
      }

      filter.removeAttribute('aria-current');
    });
  };

  const filterPortfolio = (filterValue: string) => {
    let visibleCount = 0;

    portfolioCards.forEach((card) => {
      const categories = card.getAttribute('data-portfolio-categories') ?? '';
      const shouldShow =
        filterValue === 'all' || categories.split(' ').includes(filterValue);

      card.hidden = !shouldShow;

      if (shouldShow) {
        visibleCount += 1;
      }
    });

    if (portfolioEmpty) {
      portfolioEmpty.hidden = visibleCount > 0;
    }
  };

  const cleanupCallbacks: Cleanup[] = [];

  portfolioFilters.forEach((filter) => {
    const filterValue = filter.getAttribute('data-portfolio-filter');

    if (!filterValue || filter.disabled) {
      return;
    }

    if (filter.getAttribute('aria-current') === 'true') {
      filterPortfolio(filterValue);
    }

    const handleClick = () => {
      setActiveFilter(filter);
      filterPortfolio(filterValue);
    };

    filter.addEventListener('click', handleClick);
    cleanupCallbacks.push(() => filter.removeEventListener('click', handleClick));
  });

  const cleanup = () => {
    cleanupCallbacks.forEach((callback) => callback());
  };

  window.__portfolioFiltersCleanup__ = cleanup;
  return cleanup;
}
