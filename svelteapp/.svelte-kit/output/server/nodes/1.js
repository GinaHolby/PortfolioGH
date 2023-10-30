

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1de4b44f.js","_app/immutable/chunks/index.0e13f6b8.js","_app/immutable/chunks/singletons.df098ffb.js","_app/immutable/chunks/index.b8ea45a8.js"];
export const stylesheets = [];
export const fonts = [];
