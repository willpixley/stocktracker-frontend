import axios from 'axios';

export async function load({ params }: { params: any }) {
	const FINNHUB_API_KEY = import.meta.env.VITE_FINNHUB_API_KEY;
	const CONGRESS_KEY = 'Fi7HCmCMb9tmK780KedcRG0diNx4TT0z6YJxiyzv';
	const searchParams = { trade_id: params.id };
	const BASE_URL = import.meta.env.VITE_BACKEND_API_URL;
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
