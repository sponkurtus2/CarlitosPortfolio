import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as renderSlot } from './astro/server_Bfblfidm.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_7AYJTMKA.mjs';
/* empty css                           */

const $$Astro = createAstro();
const $$Article = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Article;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": frontmatter.title, "data-astro-cid-eifkgn2e": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article data-astro-cid-eifkgn2e> <h1 data-astro-cid-eifkgn2e>${frontmatter.title}</h1> <p data-astro-cid-eifkgn2e>${frontmatter.date}</p> <!-- Asegurarte de que el contenido se renderiza correctamente como HTML --> <div class="content" data-astro-cid-eifkgn2e> <div class="content" data-astro-cid-eifkgn2e> ${renderSlot($$result2, $$slots["default"])} </div> </div> </article> ` })} `;
}, "D:/CarlitosAdventures/CarlitosPortfolio/src/pages/article.astro", void 0);

const $$file = "D:/CarlitosAdventures/CarlitosPortfolio/src/pages/article.astro";
const $$url = "/article";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Article,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Article as $, _page as _ };
