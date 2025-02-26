import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
async function load({ params }) {
  const API_KEY = process.env.FINNHUB_KEY;
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
export {
  load
};
