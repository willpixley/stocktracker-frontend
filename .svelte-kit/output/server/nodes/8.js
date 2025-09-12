import * as universal from '../entries/pages/stocks/_ticker_/_page.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/stocks/_ticker_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/stocks/[ticker]/+page.ts";
export const imports = ["_app/immutable/nodes/8.CZyZYZv1.js","_app/immutable/chunks/BQJyKPGC.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DSNjSPQB.js","_app/immutable/chunks/XLCrm3M2.js","_app/immutable/chunks/DtGOfqIC.js","_app/immutable/chunks/D1iG-USv.js","_app/immutable/chunks/BofesM0e.js","_app/immutable/chunks/CQDC-aga.js","_app/immutable/chunks/CN0i8xaz.js","_app/immutable/chunks/B489krB4.js","_app/immutable/chunks/CP9ULRdw.js","_app/immutable/chunks/OS8bO3dS.js","_app/immutable/chunks/B528Yyv5.js","_app/immutable/chunks/B-ZSc5eS.js"];
export const stylesheets = [];
export const fonts = [];
