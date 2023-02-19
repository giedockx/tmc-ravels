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
          {
            name: 'posts',
            label: 'Blog Posts',
            folder: 'src/pages/posts',
            create: true,
            delete: true,
            fields: [
              { name: 'title', widget: 'string', label: 'Post Title' },              
              {
                name: 'publishDate',
                widget: 'datetime',
                format: 'DD MMM YYYY',
                date_format: 'DD MMM YYYY',
                time_format: false,
                label: 'Publish Date',
              },
              { name: 'author', widget: 'string', label: 'Author Name', required: false },
              { name: 'authorURL', widget: 'string', label: 'Author URL', required: false },
              { name: 'description', widget: 'string', label: 'Description', required: false },
              { name: 'body', widget: 'markdown', label: 'Post Body' },
              {
                name: 'layout',
                widget: 'select',
                default: 'layouts/BaseLayout.astro',
                options: [
                  { label: 'Blog Post', value: 'layouts/BaseLayout.astro' },
            ]
          }
        ],
      }
    }),
  ],
});
