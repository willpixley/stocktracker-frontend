import axios from 'axios';

async function load() {
  const BASE_URL = "http://localhost:8000";
  try {
    const trends = await axios.get(`${BASE_URL}/market/trends`, {});
    return {
      trends: trends.data
    };
  } catch (e) {
    console.log(e);
  }
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-0dtGWwu4.js')).default;
const universal_id = "src/routes/market/+page.ts";
const imports = ["_app/immutable/nodes/4.KWmZkhw0.js","_app/immutable/chunks/BQJyKPGC.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DSNjSPQB.js","_app/immutable/chunks/XLCrm3M2.js","_app/immutable/chunks/DtGOfqIC.js","_app/immutable/chunks/CQDC-aga.js","_app/immutable/chunks/CN0i8xaz.js","_app/immutable/chunks/CP9ULRdw.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=4-DaQDX_ny.js.map
