import * as universal from '../entries/pages/recipie/_slug_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/recipie/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/recipie/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/4.50262789.js","_app/immutable/chunks/sanityConfig.2f41ecc9.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.0e13f6b8.js","_app/immutable/chunks/Rating.svelte_svelte_type_style_lang.0daa2017.js"];
export const stylesheets = ["_app/immutable/assets/4.b38ce75c.css","_app/immutable/assets/Rating.132b991c.css"];
export const fonts = [];
