import { c as createComponent, s as spreadAttributes, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_Bfblfidm.mjs';
import { $ as $$Article } from './article_kLZ8rzB7.mjs';
import { g as getImage } from './_astro_assets_D08Ps330.mjs';

const Astro__12fOxY = new Proxy({"src":"/_astro/friends.BewK0lSh.JPG","width":4000,"height":3000,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/CarlitosAdventures/CarlitosPortfolio/src/images/posts/friends.JPG";
							}
							
							return target[name];
						}
					});

const Astro__1UoQL0 = new Proxy({"src":"/_astro/CA.BDBx8EsC.JPG","width":4000,"height":3000,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/CarlitosAdventures/CarlitosPortfolio/src/images/posts/CA.JPG";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./images/posts/friends\\.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../images/posts/friends.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__12fOxY, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./images/posts/CA\\.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../images/posts/CA.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1UoQL0, ...props});
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
			const html = await updateImageReferences("<h1 id=\"why-is-life-so-good\">Why is life so good?</h1>\n<p>Yeah, life can sometimes be hard, sad, and even bad, but in the end, I think it’s pretty normal.\r\nYou won’t always be happy or relaxed; sometimes you’ll be so stressed, so sad, that you won’t even want to get out of bed. Those moments can be negative or bad, but the magic happens when those moments go away. Because, just like good moments, bad moments are not eternal.</p>\n<p>We always feel something, whether it’s good or bad, but we do feel. However, I prefer to focus on the good things. Even though bad moments are important too, and they allow us to learn from mistakes, good moments are way better for me. I tend to be positive and thank God for the moments I have. They may be simple, but simple things are more enjoyable. You don’t need to have all the pleasures in the world to have a good moment. If you would just take a bit of your time to think about how lucky you are to have such moments, you’d realize why they are so important and enjoyable.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../images/posts/friends.JPG&#x22;,&#x22;alt&#x22;:&#x22;Friends&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Take this photo for example. For you, it may look like a simple classroom with a bunch of people, but for me, it’s way more than that.\r\nWhat I see is a classroom where I’m studying something I’m passionate about, a place where I’ve spent almost two and a half years, a classroom in a university where I’ve grown. I’ve learned so many things, not just academically, but life lessons too.\r\nIt’s a place where I’ve had so much fun with friends, where I’ve eaten things I like, where I’ve met great people. And not only that—I also see people, but not just any people; they are friends who have been with me for some time. Friends I can talk to, friends who make me laugh even when I’m not at my best, friends I see almost every day, and friends I really hope will succeed in life.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../images/posts/CA.JPG&#x22;,&#x22;alt&#x22;:&#x22;Couple&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I don’t need to say much about this because I think the photo explains it by itself.\r\nNo expensive place, no fancy clothes, no alcohol—just a couple of teenagers spending their day together, making the effort to be there. But if you ask me, I see something only I can see. Why? Because I’m in love with her, and I can see all of her good and bad sides. I can see who she really is (Or that’s what I think), and that makes me happy, because I never thought this moment would happen. It just did, and that’s what makes it so special.</p>\n<p>We sometimes worry about the future—if we’ll still be together in a year, if I’ll get this job in the next few months. We worry about so many things, but always remember:\r\n<em>Tomorrow will be tomorrow. Today, and only today, is today.</em></p>");
	

				const frontmatter = {"layout":"../article.astro","title":"Life is pretty good","date":"10-14-2024"};
				const file = "D:/CarlitosAdventures/CarlitosPortfolio/src/pages/articles/LifeIsGood.md";
				const url = "/articles/LifeIsGood";
				function rawContent() {
					return "\r\n# Why is life so good?\r\nYeah, life can sometimes be hard, sad, and even bad, but in the end, I think it's pretty normal.\r\nYou won't always be happy or relaxed; sometimes you'll be so stressed, so sad, that you won't even want to get out of bed. Those moments can be negative or bad, but the magic happens when those moments go away. Because, just like good moments, bad moments are not eternal.\r\n\r\nWe always feel something, whether it's good or bad, but we do feel. However, I prefer to focus on the good things. Even though bad moments are important too, and they allow us to learn from mistakes, good moments are way better for me. I tend to be positive and thank God for the moments I have. They may be simple, but simple things are more enjoyable. You don't need to have all the pleasures in the world to have a good moment. If you would just take a bit of your time to think about how lucky you are to have such moments, you'd realize why they are so important and enjoyable.\r\n\r\n![Friends](../../images/posts/friends.JPG)\r\n\r\nTake this photo for example. For you, it may look like a simple classroom with a bunch of people, but for me, it's way more than that.\r\nWhat I see is a classroom where I'm studying something I'm passionate about, a place where I've spent almost two and a half years, a classroom in a university where I've grown. I've learned so many things, not just academically, but life lessons too.\r\nIt's a place where I've had so much fun with friends, where I've eaten things I like, where I've met great people. And not only that—I also see people, but not just any people; they are friends who have been with me for some time. Friends I can talk to, friends who make me laugh even when I'm not at my best, friends I see almost every day, and friends I really hope will succeed in life.\r\n\r\n![Couple](../../images/posts/CA.JPG)\r\n\r\nI don't need to say much about this because I think the photo explains it by itself.\r\nNo expensive place, no fancy clothes, no alcohol—just a couple of teenagers spending their day together, making the effort to be there. But if you ask me, I see something only I can see. Why? Because I'm in love with her, and I can see all of her good and bad sides. I can see who she really is (Or that's what I think), and that makes me happy, because I never thought this moment would happen. It just did, and that's what makes it so special.\r\n\r\nWe sometimes worry about the future—if we'll still be together in a year, if I'll get this job in the next few months. We worry about so many things, but always remember:\r\n*Tomorrow will be tomorrow. Today, and only today, is today.*";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"why-is-life-so-good","text":"Why is life so good?"}];
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
