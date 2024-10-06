import { defineConfig } from 'astro/config';
import swup from '@swup/astro';
import node from "@astrojs/node";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  server: {
    port: parseInt(process.env.PORT) || 4321,
    host: true
  },
  integrations: [swup({
    theme: 'fade',
    containers: ['main', 'nav', 'body'],
    cache: true,
    preload: false,
    accessibility: true,
    morph: false,
    parallel: false,
    progress: false,
    routes: false,
    smoothScrolling: true,
    updateBodyClass: false,
    updateHead: true,
    reloadScripts: true,
    debug: false,
    loadOnIdle: true,
    globalInstance: false
  }), mdx()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});