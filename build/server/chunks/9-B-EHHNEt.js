import axios from 'axios';

async function load({ params }) {
  const BASE_URL = "http://localhost:8000";
  try {
    const trades = await axios.get(`${BASE_URL}/trades/flagged?nocache=${(/* @__PURE__ */ new Date()).getTime()}`);
    return {
      trades: trades.data.results
    };
  } catch (e) {
    console.log(e);
  }
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BqT8Y_gm.js')).default;
const universal_id = "src/routes/trades/+page.ts";
const imports = ["_app/immutable/nodes/9.CftqUpnX.js","_app/immutable/chunks/BQJyKPGC.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DSNjSPQB.js","_app/immutable/chunks/XLCrm3M2.js","_app/immutable/chunks/CQDC-aga.js","_app/immutable/chunks/CN0i8xaz.js","_app/immutable/chunks/Bd8s1yK_.js","_app/immutable/chunks/DtGOfqIC.js","_app/immutable/chunks/D1iG-USv.js","_app/immutable/chunks/BofesM0e.js","_app/immutable/chunks/Ct61ajN9.js","_app/immutable/chunks/CP9ULRdw.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=9-B-EHHNEt.js.map
