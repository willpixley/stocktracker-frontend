import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export async function load({ params }: { params: any }) {
	const API_KEY = process.env.FINNHUB_KEY;
	const CONGRESS_KEY = process.env.CONGRESS_API_KEY;
	const searchParams = { trade_id: params.id };

	try {
		const trade = await axios.get(`http://127.0.0.1:8000/trades`, {
			params: searchParams
		});
		const profileSearchParams = {
			token: API_KEY,
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
