import { getInsightPath, publishedInsights } from '../src/data/insights.ts';
import { portfolioProjects } from '../src/data/site.ts';

const siteRefreshDate = new Date('2026-06-05T00:00:00-03:00');

const staticRouteDates = new Map([
  ['/', siteRefreshDate],
  ['/criacao-de-sites/', siteRefreshDate],
  ['/site-institucional/', siteRefreshDate],
  ['/landing-page/', siteRefreshDate],
  ['/blog-profissional/', siteRefreshDate],
  ['/criacao-de-sites-belem/', siteRefreshDate],
  ['/portfolio/', siteRefreshDate],
  ['/insights/', siteRefreshDate],
]);

const insightRouteDates = publishedInsights.map((post) => [
  getInsightPath(post),
  new Date(`${post.isoDate}T00:00:00-03:00`),
]);

const portfolioRouteDates = portfolioProjects.map((project) => [
  `/portfolio/${project.slug}/`,
  siteRefreshDate,
]);

const routeDates = new Map([
  ...staticRouteDates,
  ...insightRouteDates,
  ...portfolioRouteDates,
]);

export const getSitemapLastmod = (url) => {
  const pathname = new URL(url).pathname;
  return routeDates.get(pathname) ?? siteRefreshDate;
};
