import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export async function load({ params }: { params: any }) {
	const BASE_URL = 'https://api.congressstockwatch.com';

	try {
		const trades = await axios.get(`${BASE_URL}/trades?nocache=${new Date().getTime()}`);
		return {
			trades: trades.data.results
		};
	} catch (e) {
		console.log(e);
	}
}
