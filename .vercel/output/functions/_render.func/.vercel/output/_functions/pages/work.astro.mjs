import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bfblfidm.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_7AYJTMKA.mjs';
/* empty css                                   */
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Work = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Works", "data-astro-cid-jljc7dey": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-jljc7dey> <hgroup data-astro-cid-jljc7dey> <h1 data-astro-cid-jljc7dey>My recent work</h1> <p data-astro-cid-jljc7dey>
Venturing into the realm of software engineering
                                with a thirst for knowledge and hands-on
                                experience, I am excited to showcase my early
                                projects and growth in this dynamic field.
</p> </hgroup> <hr data-astro-cid-jljc7dey> <hgroup data-astro-cid-jljc7dey> <h5 data-astro-cid-jljc7dey>Autozone</h5> <h6 data-astro-cid-jljc7dey>Intership in Software development - 2024</h6> </hgroup> <p data-astro-cid-jljc7dey>
During my internship at Autozone, I contributed to the "Career Path" project, 
                        which serves as a comprehensive career map for employees. This platform allows 
                        employees to explore various career options and the necessary requirements to 
                        apply for specific positions. My responsibilities included both development and 
                        modernization of key components of the system.
</p> <ul data-astro-cid-jljc7dey> <li data-astro-cid-jljc7dey>
I developed new features using Java and Spring Boot, such as Java controllers and services.
</li> <li data-astro-cid-jljc7dey>
I migrated legacy code from Java 7 to Java 17, improving performance and maintainability.
</li> <li data-astro-cid-jljc7dey>
Integrated Oracle DB for persistent data management, ensuring data reliability and integrity.
</li> <li data-astro-cid-jljc7dey>
Collaborated on frontend tasks using Next.js, optimizing the user interface for a seamless experience.
</li> <li data-astro-cid-jljc7dey>
Implemented comprehensive testing procedures to ensure the quality and stability of the platform.
</li> </ul> <hr data-astro-cid-jljc7dey> <hgroup data-astro-cid-jljc7dey> <h5 data-astro-cid-jljc7dey>Bustrack</h5> <h6 data-astro-cid-jljc7dey>Software developer - 2024</h6> </hgroup> <p data-astro-cid-jljc7dey>
Bustrack is a project that I co-founded with two
                        friends, where we envisioned and brought to life an
                        innovative transportation platform. My primary role
                        involved leading the design, development, and
                        implementation of the web application.
</p> <ul data-astro-cid-jljc7dey> <li data-astro-cid-jljc7dey>
bustrack provides real-time information about
                                the location of buses
</li> <li data-astro-cid-jljc7dey>
It enhances safety and communication within the
                                transportation system. This includes the
                                implementation of unique QR codes for each user,
                                enabling more efficient and secure access
                                control.
</li> <li data-astro-cid-jljc7dey>
It improves the accessibility of the
                                transportation system for people with visual
                                impairments.
</li> </ul> <a href="https://bus-track.vercel.app/" class="secondary" data-astro-cid-jljc7dey>You can view the site here.</a> </main> ` })} `;
}, "D:/CarlitosAdventures/CarlitosPortfolio/src/pages/work.astro", void 0);

const $$file = "D:/CarlitosAdventures/CarlitosPortfolio/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$Work,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
