import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const [origin, output] = process.argv.slice(2);
if (!origin || !output) throw new Error('Usage: node scripts/measure-mobile-psi.mjs https://public-host.example output.json');
const routes = ['/', '/criacao-de-sites-belem/', '/insights/quanto-tempo-leva-para-criar-um-site-profissional/'];
const results = { observed_at: new Date().toISOString(), origin, strategy: 'mobile', runs_per_url: 3, pages: [] };
const median = (values) => [...values].sort((a, b) => a - b)[1];
for (const route of routes) {
  const page = { url: new URL(route, origin).href, runs: [] };
  for (let run = 1; run <= 3; run++) {
    const api = new URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed');
    api.searchParams.set('url', page.url);
    api.searchParams.set('strategy', 'mobile');
    api.searchParams.set('category', 'performance');
    if (process.env.PAGESPEED_API_KEY) api.searchParams.set('key', process.env.PAGESPEED_API_KEY);
    const response = await fetch(api, { signal: AbortSignal.timeout(180000) });
    if (!response.ok) throw new Error('PSI request failed: HTTP ' + response.status + '. No median can be claimed.');
    const report = await response.json();
    const { audits, lighthouseVersion, fetchTime, configSettings } = report.lighthouseResult;
    page.runs.push({ run, lighthouse_version: lighthouseVersion, fetch_time: fetchTime, settings: configSettings,
      lcp_ms: audits['largest-contentful-paint'].numericValue,
      fcp_ms: audits['first-contentful-paint'].numericValue,
      cls: audits['cumulative-layout-shift'].numericValue,
      tbt_ms: audits['total-blocking-time'].numericValue,
      field_data: report.loadingExperience?.overall_category ?? 'unavailable',
    });
    console.log(page.url + ' run ' + run + ': LCP ' + page.runs.at(-1).lcp_ms + 'ms');
  }
  page.medians = Object.fromEntries(['lcp_ms', 'fcp_ms', 'cls', 'tbt_ms'].map((key) => [key, median(page.runs.map((run) => run[key]))]));
  results.pages.push(page);
  await mkdir(resolve(output, '..'), { recursive: true });
  await writeFile(output, JSON.stringify(results, null, 2) + '\n');
}
