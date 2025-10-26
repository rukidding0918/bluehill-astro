// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://rukidding0918.github.io',
  base: process.env.NODE_ENV === 'production' ? '/bluehill-astro' : '/',
  integrations: [mdx()]
});