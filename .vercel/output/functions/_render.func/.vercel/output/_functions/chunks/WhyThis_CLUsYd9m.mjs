import { c as createComponent, s as spreadAttributes, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_Bfblfidm.mjs';
import { $ as $$Article } from './article_kLZ8rzB7.mjs';
import { g as getImage } from './_astro_assets_D08Ps330.mjs';

const Astro__uLfxp = new Proxy({"src":"/_astro/WhyThis.Bq7hFBZ4.JPG","width":4000,"height":3000,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/CarlitosAdventures/CarlitosPortfolio/src/images/posts/WhyThis.JPG";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./images/posts/WhyThis\\.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../images/posts/WhyThis.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__uLfxp, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<h1 id=\"reflections-on-creating-a-minimalist-portfolio\">Reflections on Creating a Minimalist Portfolio</h1>\n<p>I’m not a big fan of JavaScript, so it might seem odd that I built a web portfolio. Why did I do it then? The answer lies in my love for two seemingly disparate things: coding and minimalist art.</p>\n<p>I’ve always seen a particular beauty in minimalist, dark, simple yet powerful software. This aesthetic reflects my design and development philosophy.</p>\n<h2 id=\"the-developers-portfolio-dilemma\">The Developer’s Portfolio Dilemma</h2>\n<p>As a programmer, I recognize the importance of having an online portfolio. However, not being a frontend developer, I didn’t want to create a dazzling site full of animations and complex functionalities. That simply doesn’t reflect my style or interests.</p>\n<h2 id=\"a-minimalist-approach\">A Minimalist Approach</h2>\n<p>Instead of aiming to create the most impressive portfolio in history, I drew inspiration from @vercel to design something minimalist. My portfolio focuses on the essentials:</p>\n<ul>\n<li>A welcome menu with a brief introduction</li>\n<li>My work experience</li>\n<li>A space for articles about my interests and creations</li>\n<li>An image gallery</li>\n</ul>\n<h3 id=\"why-a-gallery\">Why a Gallery?</h3>\n<p>The inclusion of a gallery section was a personal touch. I think it’s cool to share positive photos of life, special moments with oneself, friends, and family. It’s a way to add a human touch to a professional site.</p>\n<h2 id=\"the-development-experience\">The Development Experience</h2>\n<p>Although frontend isn’t my forte, I enjoyed working on this small, simple project. Using tools like <a href=\"https://astro.build/\">@Astro</a>, <a href=\"https://picocss.com/\">@Picocss</a>, and <a href=\"https://vercel.com/\">@Vercel</a> made the experience rewarding:</p>\n<ul>\n<li><strong><a href=\"https://astro.build/\">@Astro</a></strong>: Offers an easy way to create simple websites. I like how it mixes script/html/style in a single .astro file, simplifying the work.</li>\n<li><strong><a href=\"https://picocss.com/\">@Picocss</a></strong>: Provides minimalist and beautiful HTML elements, allowing me to focus on structure rather than styles.</li>\n<li><strong><a href=\"https://vercel.com/\">@Vercel</a></strong>: My favorite platform for deploying sites. It’s incredibly easy to use and requires minimal configuration.</li>\n</ul>\n<h2 id=\"final-thoughts\">Final Thoughts</h2>\n<p>To everyone out there: put your hands to work and create your own portfolio. Believe me, it’s fun. Put your soul into the work, and you’ll see how your portfolio becomes a reflection of yourself.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../images/posts/WhyThis.JPG&#x22;,&#x22;alt&#x22;:&#x22;Final IMG&#x22;,&#x22;index&#x22;:0}\"></p>");
	

				const frontmatter = {"layout":"../article.astro","title":"Why did I build this site?","date":"10-04-2024"};
				const file = "D:/CarlitosAdventures/CarlitosPortfolio/src/pages/articles/WhyThis.md";
				const url = "/articles/WhyThis";
				function rawContent() {
					return "\r\n# Reflections on Creating a Minimalist Portfolio\r\n\r\nI'm not a big fan of JavaScript, so it might seem odd that I built a web portfolio. Why did I do it then? The answer lies in my love for two seemingly disparate things: coding and minimalist art.\r\n\r\nI've always seen a particular beauty in minimalist, dark, simple yet powerful software. This aesthetic reflects my design and development philosophy.\r\n\r\n## The Developer's Portfolio Dilemma\r\n\r\nAs a programmer, I recognize the importance of having an online portfolio. However, not being a frontend developer, I didn't want to create a dazzling site full of animations and complex functionalities. That simply doesn't reflect my style or interests.\r\n\r\n## A Minimalist Approach\r\n\r\nInstead of aiming to create the most impressive portfolio in history, I drew inspiration from @vercel to design something minimalist. My portfolio focuses on the essentials:\r\n\r\n- A welcome menu with a brief introduction\r\n- My work experience\r\n- A space for articles about my interests and creations\r\n- An image gallery\r\n\r\n### Why a Gallery?\r\n\r\nThe inclusion of a gallery section was a personal touch. I think it's cool to share positive photos of life, special moments with oneself, friends, and family. It's a way to add a human touch to a professional site.\r\n\r\n## The Development Experience\r\n\r\nAlthough frontend isn't my forte, I enjoyed working on this small, simple project. Using tools like [@Astro](https://astro.build/), [@Picocss](https://picocss.com/), and [@Vercel](https://vercel.com/) made the experience rewarding:\r\n\r\n- **[@Astro](https://astro.build/)**: Offers an easy way to create simple websites. I like how it mixes script/html/style in a single .astro file, simplifying the work.\r\n- **[@Picocss](https://picocss.com/)**: Provides minimalist and beautiful HTML elements, allowing me to focus on structure rather than styles.\r\n- **[@Vercel](https://vercel.com/)**: My favorite platform for deploying sites. It's incredibly easy to use and requires minimal configuration.\r\n\r\n## Final Thoughts\r\n\r\nTo everyone out there: put your hands to work and create your own portfolio. Believe me, it's fun. Put your soul into the work, and you'll see how your portfolio becomes a reflection of yourself.\r\n\r\n![Final IMG](../../images/posts/WhyThis.JPG)";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"reflections-on-creating-a-minimalist-portfolio","text":"Reflections on Creating a Minimalist Portfolio"},{"depth":2,"slug":"the-developers-portfolio-dilemma","text":"The Developer’s Portfolio Dilemma"},{"depth":2,"slug":"a-minimalist-approach","text":"A Minimalist Approach"},{"depth":3,"slug":"why-a-gallery","text":"Why a Gallery?"},{"depth":2,"slug":"the-development-experience","text":"The Development Experience"},{"depth":2,"slug":"final-thoughts","text":"Final Thoughts"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Article, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
