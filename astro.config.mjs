import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // ...
  site: 'https://greasyg.com',
  integrations: [
    mdx(),
    sitemap(),
    NetlifyCMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        collections: [
          // Content collections
        ],
      },
  }),
  ],
});