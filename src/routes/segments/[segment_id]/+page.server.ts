import axios from 'axios';
import { formatDate } from '../../../utils/lib';

export async function load({ params }: { params: any }) {
	const BASE_URL = import.meta.env.VITE_BACKEND_API_URL ?? 'https://api.congressstockwatch.com';

	const id = params.segment_id;
	const segmentParams = {
		segment_id: id
	};

	try {
		const segmentData = await axios.get(`${BASE_URL}/segments`, {
			params: segmentParams
		});

		const segment = segmentData.data.segments[0];
		const from = segment.buy_trade.date;
		const to = segment.sell_trade.date ?? '';
		const ticker = segment.stock.ticker;
		const newsParams = {
			ticker: ticker,
			from: from,
			to: to
		};
		const member_id = segment.member.bio_guide_id;
		const memberParams = {
			member_id: member_id
		};
		const news = await axios.get(`${BASE_URL}/stock/news`, {
			params: newsParams
		});
		const stockData = await axios.get(`${BASE_URL}/stock/history`, {
			params: newsParams
		});

		const memberData = await axios.get(`${BASE_URL}/members/info`, {
			params: memberParams
		});
		return {
			segment: segmentData.data.segments[0],
			stockHistory: stockData.data.data,
			news: news.data,
			member: memberData.data
		};
	} catch (e) {
		console.log(e);
		return;
	}
}
