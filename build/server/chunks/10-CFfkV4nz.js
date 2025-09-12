import axios from 'axios';

async function load({ params }) {
  const FINNHUB_API_KEY = "d2thpm1r01qr5a72mjn0d2thpm1r01qr5a72mjng";
  const CONGRESS_KEY = "Fi7HCmCMb9tmK780KedcRG0diNx4TT0z6YJxiyzv";
  const searchParams = { trade_id: params.id };
  const BASE_URL = "http://localhost:8000";
  try {
    const trade = await axios.get(`${BASE_URL}/trades`, {
      params: searchParams
    });
    const profileSearchParams = {
      token: FINNHUB_API_KEY,
      symbol: trade.data.stock.ticker
    };
    const profile = await axios.get(`https://finnhub.io/api/v1/stock/profile2`, {
      params: profileSearchParams
    });
    const memberSearchParams = { api_key: CONGRESS_KEY };
    const member = await axios.get(
      `https://api.congress.gov/v3/member/${trade.data.member.bio_guide_id}`,
      { params: memberSearchParams }
    );
    return {
      member: member.data.member,
      trade: trade.data,
      stock: profile.data
    };
  } catch (e) {
    console.log(e);
  }
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BoaLI_Ye.js')).default;
const universal_id = "src/routes/trades/[id]/+page.ts";
const imports = ["_app/immutable/nodes/10.BOoQvJQv.js","_app/immutable/chunks/BQJyKPGC.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DSNjSPQB.js","_app/immutable/chunks/XLCrm3M2.js","_app/immutable/chunks/DtGOfqIC.js","_app/immutable/chunks/BofesM0e.js","_app/immutable/chunks/CQDC-aga.js","_app/immutable/chunks/CN0i8xaz.js","_app/immutable/chunks/B489krB4.js","_app/immutable/chunks/CP9ULRdw.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=10-CFfkV4nz.js.map
