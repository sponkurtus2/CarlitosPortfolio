import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bfblfidm.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_7AYJTMKA.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_D08Ps330.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const g1 = new Proxy({"src":"/_astro/g1.cVQT0fPg.jpeg","width":1200,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/CarlitosAdventures/CarlitosPortfolio/src/images/gallery/g1.jpeg";
							}
							
							return target[name];
						}
					});

const g2 = new Proxy({"src":"/_astro/g2.DQph2NoV.jpeg","width":1599,"height":1200,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/CarlitosAdventures/CarlitosPortfolio/src/images/gallery/g2.jpeg";
							}
							
							return target[name];
						}
					});

const g3 = new Proxy({"src":"/_astro/g3.zMNFQf-1.jpeg","width":1600,"height":1200,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/CarlitosAdventures/CarlitosPortfolio/src/images/gallery/g3.jpeg";
							}
							
							return target[name];
						}
					});

const g4 = new Proxy({"src":"/_astro/g4.CIC5IPhF.jpg","width":4000,"height":3000,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/CarlitosAdventures/CarlitosPortfolio/src/images/gallery/g4.jpg";
							}
							
							return target[name];
						}
					});

const g5 = new Proxy({"src":"/_astro/g5.C22YSeKz.JPG","width":4000,"height":3000,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/CarlitosAdventures/CarlitosPortfolio/src/images/gallery/g5.JPG";
							}
							
							return target[name];
						}
					});

const g6 = new Proxy({"src":"/_astro/g6.CIdN2xaY.JPG","width":4000,"height":3000,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/CarlitosAdventures/CarlitosPortfolio/src/images/gallery/g6.JPG";
							}
							
							return target[name];
						}
					});

const g7 = new Proxy({"src":"/_astro/g7.wLbZJ0xa.JPG","width":4000,"height":3000,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/CarlitosAdventures/CarlitosPortfolio/src/images/gallery/g7.JPG";
							}
							
							return target[name];
						}
					});

const g8 = new Proxy({"src":"/_astro/g8.7OgZdjfq.JPG","width":4000,"height":3000,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/CarlitosAdventures/CarlitosPortfolio/src/images/gallery/g8.JPG";
							}
							
							return target[name];
						}
					});

const g9 = new Proxy({"src":"/_astro/g9.5qFa1Zmr.JPG","width":4000,"height":3000,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/CarlitosAdventures/CarlitosPortfolio/src/images/gallery/g9.JPG";
							}
							
							return target[name];
						}
					});

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const images = [
    { src: g1, alt: "Primera foto de mi \xE1lbum" },
    { src: g2, alt: "Segunda foto de mi \xE1lbum" },
    { src: g3, alt: "Tercera foto de mi \xE1lbum" },
    { src: g4, alt: "Cuarta foto de mi \xE1lbum" },
    { src: g5, alt: "Quinta foto de mi \xE1lbum" },
    { src: g6, alt: "Sexta foto de mi \xE1lbum" },
    { src: g7, alt: "S\xE9ptima foto de mi \xE1lbum" },
    { src: g8, alt: "Octava foto de mi \xE1lbum" },
    { src: g9, alt: "Novena foto de mi \xE1lbum" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gallery", "data-astro-cid-sahthylw": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-sahthylw> <hgroup data-astro-cid-sahthylw> <h1 data-astro-cid-sahthylw>My gallery ^^</h1> <p data-astro-cid-sahthylw>
These photos capture cherished moments and loved ones dear to me. <i class="fa-regular fa-heart" data-astro-cid-sahthylw></i> </p> </hgroup> <hr data-astro-cid-sahthylw> <div class="collage" data-astro-cid-sahthylw> ${images.map((img, index) => renderTemplate`<div class="item" data-astro-cid-sahthylw> ${renderComponent($$result2, "Image", $$Image, { "id": `img-${index}`, "src": img.src, "alt": img.alt, "class": "gallery-img", "data-astro-cid-sahthylw": true })} </div>`)} </div> </main> ` })} `;
}, "D:/CarlitosAdventures/CarlitosPortfolio/src/pages/gallery.astro", void 0);

const $$file = "D:/CarlitosAdventures/CarlitosPortfolio/src/pages/gallery.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Gallery,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
