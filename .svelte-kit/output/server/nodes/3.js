

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BJfKxLop.js","_app/immutable/chunks/OqE_2Snn.js","_app/immutable/chunks/Ynks4hVH.js","_app/immutable/chunks/0PGRgBmW.js"];
export const stylesheets = [];
export const fonts = [];
