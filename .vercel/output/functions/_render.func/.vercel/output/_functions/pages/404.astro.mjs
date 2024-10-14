import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bfblfidm.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_7AYJTMKA.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Not Found", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-zetdm5md> <h1 data-astro-cid-zetdm5md>404</h1> <p data-astro-cid-zetdm5md>Page not found</p> <a href="/" class="article-link" data-astro-cid-zetdm5md>Go back home</a> </main> ` })} `;
}, "D:/CarlitosAdventures/CarlitosPortfolio/src/pages/404.astro", void 0);

const $$file = "D:/CarlitosAdventures/CarlitosPortfolio/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
