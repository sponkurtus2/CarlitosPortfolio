import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Bi8AQkhA.mjs';
import { manifest } from './manifest_Bz5WXCc6.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/article.astro.mjs');
const _page3 = () => import('./pages/articles/lifeisgood.astro.mjs');
const _page4 = () => import('./pages/articles/whythis.astro.mjs');
const _page5 = () => import('./pages/articles.astro.mjs');
const _page6 = () => import('./pages/articles/_---slug_.astro.mjs');
const _page7 = () => import('./pages/gallery.astro.mjs');
const _page8 = () => import('./pages/work.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/article.astro", _page2],
    ["src/pages/articles/LifeIsGood.md", _page3],
    ["src/pages/articles/WhyThis.md", _page4],
    ["src/pages/articles.astro", _page5],
    ["src/pages/articles/[...slug].astro", _page6],
    ["src/pages/gallery.astro", _page7],
    ["src/pages/work.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b15ff019-5fa6-4aa9-ada6-aceae618e0b0",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
