import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderSlot, a as renderComponent, f as renderHead, e as addAttribute, b as createAstro } from './astro/server_Bfblfidm.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="container" data-astro-cid-dmqpwcec> <nav data-astro-cid-dmqpwcec> <ul data-astro-cid-dmqpwcec> <li data-astro-cid-dmqpwcec><strong class="navFont" data-astro-cid-dmqpwcec>Carlos Reyes</strong></li> </ul> <ul data-astro-cid-dmqpwcec> <li class="navFont" data-astro-cid-dmqpwcec><a href="/" class="contrast" data-astro-cid-dmqpwcec>Home</a></li> <li class="navFont" data-astro-cid-dmqpwcec><a href="/work/" class="contrast" data-astro-cid-dmqpwcec>Work</a></li> <li class="navFont" data-astro-cid-dmqpwcec><a href="/articles/" class="contrast" data-astro-cid-dmqpwcec>Articles</a></li> <li class="navFont" data-astro-cid-dmqpwcec><a href="/gallery" class="contrast" data-astro-cid-dmqpwcec>Gallery</a></li> </ul> </nav> </main> `;
}, "D:/CarlitosAdventures/CarlitosPortfolio/src/components/Nav.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/images/webicon.ico"><meta name="generator"', "><title>", '</title><script src="https://kit.fontawesome.com/647d859031.js" crossorigin="anonymous"><\/script><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.colors.min.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap" rel="stylesheet">', "</head> <body> ", " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Nav", $$Nav, {}), renderSlot($$result, $$slots["default"]));
}, "D:/CarlitosAdventures/CarlitosPortfolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
