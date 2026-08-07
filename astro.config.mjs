import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://seyfeddinejouini.github.io',
  base: '/Portfolio-Seyfeddine-Jouini/',
  integrations: [icon()],
});