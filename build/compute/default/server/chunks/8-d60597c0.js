import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
async function load({ params }) {
  const API_KEY = "cunbfn1r01qqo190vd50cunbfn1r01qqo190vd5g";
  const threeMonthsAgo = /* @__PURE__ */ new Date();
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
  const today = /* @__PURE__ */ new Date();
  const formattedPast = threeMonthsAgo.toISOString().split("T")[0];
  const formattedPresent = today.toISOString().split("T")[0];
  const profileSearchParams = {
    token: API_KEY,
    symbol: params.ticker
  };
  const newsSearchParams = {
    token: API_KEY,
    symbol: params.ticker,
    from: formattedPast,
    to: formattedPresent
  };
  try {
    const profile = await axios.get(`https://finnhub.io/api/v1/stock/profile2`, {
      params: profileSearchParams
    });
    const news = await axios.get(`https://finnhub.io/api/v1/company-news`, {
      params: newsSearchParams
    });
    return {
      ticker: params.ticker,
      company: profile.data,
      news: news.data.slice(0, 20)
    };
  } catch (e) {
    console.log(e);
    return;
  }
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-56c49820.js')).default;
const server_id = "src/routes/stocks/[ticker]/+page.server.ts";
const imports = ["_app/immutable/nodes/8.CmEgFtfr.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/DegsgbsN.js","_app/immutable/chunks/DT5_h6ex.js","_app/immutable/chunks/BE4_gmHA.js","_app/immutable/chunks/C3QF1EE5.js","_app/immutable/chunks/COJPL8Gv.js","_app/immutable/chunks/BHyeaF4V.js","_app/immutable/chunks/B0kgsvls.js","_app/immutable/chunks/ClTzmbyL.js","_app/immutable/chunks/D9hLykie.js","_app/immutable/chunks/CP9ULRdw.js"];
const stylesheets = ["_app/immutable/assets/8.DY1CqdnI.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-d60597c0.js.map
