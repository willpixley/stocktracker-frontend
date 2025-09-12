import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.DEKxx-nz.js","_app/immutable/chunks/BQJyKPGC.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DSNjSPQB.js","_app/immutable/chunks/XLCrm3M2.js","_app/immutable/chunks/CQDC-aga.js","_app/immutable/chunks/CN0i8xaz.js","_app/immutable/chunks/Bd8s1yK_.js","_app/immutable/chunks/DtGOfqIC.js","_app/immutable/chunks/D1iG-USv.js","_app/immutable/chunks/BofesM0e.js","_app/immutable/chunks/Ct61ajN9.js","_app/immutable/chunks/CP9ULRdw.js"];
export const stylesheets = [];
export const fonts = [];
