import { defineConfig } from 'astro/config';
import swup from '@swup/astro';

// https://astro.build/config
export default defineConfig({
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
      globalInstance: false,
      Content: true,
    })]
});
