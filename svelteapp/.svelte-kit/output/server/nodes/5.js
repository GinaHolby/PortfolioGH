import * as universal from '../entries/pages/topics/_slug_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/topics/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/topics/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/5.706238ca.js","_app/immutable/chunks/sanityConfig.2f41ecc9.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.0e13f6b8.js"];
export const stylesheets = [];
export const fonts = [];
