import { defineConfig } from 'astro/config';

// Set SITE_URL / BASE_PATH in CI to deploy to a GitHub Pages project site.
// Local development defaults to the root path.
const site = process.env.SITE_URL || 'https://hkucpc.github.io';
const base = (process.env.BASE_PATH || '/').replace(/\/?$/, '/');

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
