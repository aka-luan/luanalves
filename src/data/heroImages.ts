import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

// Keep content paths in /assets/ while producing responsive files at build time.
const images = import.meta.glob<ImageMetadata>([
  '/public/assets/*hero*.webp',
  '/public/assets/hero-img.webp',
  '/public/assets/insights/*post.webp',
], {
  eager: true,
  import: 'default',
});

export const homeHeroSizes = '(max-width: 960px) min(608px, calc(100vw - 48px)), 460px';

export async function getHeroImage(path: string, sizes: string) {
  const source = images[`/public${path}`];
  if (!source) throw new Error(`Hero image not found: ${path}`);

  const widths = [...new Set([400, 640, 960, Math.min(1448, source.width)])]
    .filter((width) => width <= source.width).sort((a, b) => a - b);
  const variants = await Promise.all(widths.map(async (width) => ({
    width,
    image: await getImage({ src: source, width, format: 'webp', quality: 80 }),
  })));

  return {
    src: variants.at(-1)!.image.src,
    srcset: variants.map(({ width, image }) => `${image.src} ${width}w`).join(', '),
    sizes,
    width: source.width,
    height: source.height,
  };
}
