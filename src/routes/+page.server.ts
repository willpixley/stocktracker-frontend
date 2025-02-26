import axios from 'axios';
import dotenv from 'dotenv';
//dotenv.config();

export async function load({ params }: { params: any }) {
	const BASE_URL = import.meta.env.BACKEND_BASE_URL;

	try {
		const trades = await axios.get(
			`https://api.congressstockwatch.com/trades?nocache=${new Date().getTime()}`
		);
		return {
			trades: trades.data.results
		};
	} catch (e) {
		console.log(e);
	}
}
