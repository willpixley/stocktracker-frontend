import axios from 'axios';

async function load({ params }) {
  const searchParams = { id: params.id };
  const BASE_URL = "http://localhost:8000";
  const CONGRESS_KEY = "Fi7HCmCMb9tmK780KedcRG0diNx4TT0z6YJxiyzv";
  try {
    const trades = await axios.get(`${BASE_URL}/trades/member`, {
      params: searchParams
    });
    const memberSearchParams = { api_key: CONGRESS_KEY };
    const member = await axios.get(`https://api.congress.gov/v3/member/${params.id}`, {
      params: memberSearchParams
    });
    return {
      member: member.data.member,
      trades: trades.data.trades,
      history: trades.data.history
    };
  } catch (e) {
    console.log(e);
  }
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BiviQMZv.js')).default;
const universal_id = "src/routes/members/[id]/+page.ts";
const imports = ["_app/immutable/nodes/6.CZHzj731.js","_app/immutable/chunks/BQJyKPGC.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DSNjSPQB.js","_app/immutable/chunks/XLCrm3M2.js","_app/immutable/chunks/DtGOfqIC.js","_app/immutable/chunks/DKayEiXG.js","_app/immutable/chunks/D1iG-USv.js","_app/immutable/chunks/BofesM0e.js","_app/immutable/chunks/Ct61ajN9.js","_app/immutable/chunks/CQDC-aga.js","_app/immutable/chunks/CN0i8xaz.js","_app/immutable/chunks/CP9ULRdw.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=6-CZuUAzTE.js.map
