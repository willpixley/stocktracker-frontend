import * as universal from '../entries/pages/market/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/market/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/market/+page.ts";
export const imports = ["_app/immutable/nodes/4.KWmZkhw0.js","_app/immutable/chunks/BQJyKPGC.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DSNjSPQB.js","_app/immutable/chunks/XLCrm3M2.js","_app/immutable/chunks/DtGOfqIC.js","_app/immutable/chunks/CQDC-aga.js","_app/immutable/chunks/CN0i8xaz.js","_app/immutable/chunks/CP9ULRdw.js"];
export const stylesheets = [];
export const fonts = [];
