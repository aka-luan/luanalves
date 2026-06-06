import { chromium, devices } from 'playwright';
import path from 'node:path';
import fs from 'node:fs/promises';

async function capture(page, url, name) {
  await page.goto(url, { waitUntil: 'networkidle' });

  const hero = page.locator('.hero');
  const title = page.locator('.hero-title');
  const media = page.locator('.hero-media');
  const proof = page.locator('.hero-proof');
  const location = page.locator('.hero-location-chip');

  await hero.waitFor({ state: 'visible', timeout: 30000 });

  const [heroBox, titleBox, mediaBox, proofBox, locationBox, viewport] =
    await Promise.all([
      hero.boundingBox(),
      title.boundingBox(),
      media.boundingBox(),
      proof.boundingBox(),
      location.boundingBox(),
      page.viewportSize(),
    ]);

  const screenshotPath = path.join(process.cwd(), 'dist', `${name}-hero-check.png`);
  await hero.screenshot({ path: screenshotPath });

  return {
    name,
    viewport,
    screenshotPath,
    heroBox,
    titleBox,
    mediaBox,
    proofBox,
    locationBox,
  };
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const url = 'http://127.0.0.1:4321/';

  const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
  const mobileContext = await browser.newContext({
    ...devices['iPhone 13'],
  });
  const mobilePage = await mobileContext.newPage();

  const results = [];
  try {
    results.push(await capture(desktopPage, url, 'desktop'));
    results.push(await capture(mobilePage, url, 'mobile'));
  } finally {
    await mobileContext.close();
    await browser.close();
  }

  await fs.writeFile(
    path.join(process.cwd(), 'dist', 'hero-check-report.json'),
    JSON.stringify(results, null, 2),
    'utf8',
  );

  process.stdout.write(JSON.stringify(results, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
