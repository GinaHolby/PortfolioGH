import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.8de61cf8.js","_app/immutable/chunks/sanityConfig.2f41ecc9.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.0e13f6b8.js"];
export const stylesheets = ["_app/immutable/assets/0.5efa0b3c.css"];
export const fonts = [];
