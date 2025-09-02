import axios from 'axios';

async function load() {
  const BASE_URL = "https://api.congressstockwatch.com";
  try {
    const trends = await axios.get(`${BASE_URL}/market/trends`, {});
    return {
      trends: trends.data
    };
  } catch (e) {
    console.log(e);
  }
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-61477f69.js')).default;
const server_id = "src/routes/market/+page.server.ts";
const imports = ["_app/immutable/nodes/4.C26Daas8.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/DegsgbsN.js","_app/immutable/chunks/DT5_h6ex.js","_app/immutable/chunks/BE4_gmHA.js","_app/immutable/chunks/BHyeaF4V.js","_app/immutable/chunks/B0kgsvls.js","_app/immutable/chunks/ClTzmbyL.js","_app/immutable/chunks/CP9ULRdw.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-9750872a.js.map
