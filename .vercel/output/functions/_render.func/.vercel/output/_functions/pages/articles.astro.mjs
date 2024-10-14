import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_Bfblfidm.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_7AYJTMKA.mjs';
/* empty css                                   */
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Articles = createComponent(async ($$result, $$props, $$slots) => {
  const articles = /* #__PURE__ */ Object.assign({"./articles/LifeIsGood.md": () => import('../chunks/LifeIsGood_a5OKH6q6.mjs').then(n => n._),"./articles/WhyThis.md": () => import('../chunks/WhyThis_CLUsYd9m.mjs').then(n => n._)});
  const articlePromises = Object.entries(articles).map(async ([path, resolver]) => {
    const article = await resolver();
    const { frontmatter } = article;
    const formattedPath = path.replaceAll("/articles/", "md").replace(".md", "").replace(".md", "");
    return { path: formattedPath, frontmatter };
  });
  const resolvedArticles = await Promise.all(articlePromises);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Carlinux articles", "data-astro-cid-xvukugm6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-xvukugm6> <ul class="articles-list" data-astro-cid-xvukugm6> ${resolvedArticles.map(({ path: formatedPath, frontmatter }) => renderTemplate`<li data-astro-cid-xvukugm6> <a${addAttribute(formatedPath, "href")} class="article-link" data-astro-cid-xvukugm6>${frontmatter.title || "Untitled Article"}</a> </li>`)} </ul> </main> ` })} `;
}, "D:/CarlitosAdventures/CarlitosPortfolio/src/pages/articles.astro", void 0);

const $$file = "D:/CarlitosAdventures/CarlitosPortfolio/src/pages/articles.astro";
const $$url = "/articles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Articles,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
