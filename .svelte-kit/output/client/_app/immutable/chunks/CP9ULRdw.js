function n(e) {
	return new Date(e).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
}
function o(e) {
	return e >= 1e3 ? (e / 1e3).toFixed(1) + ' B' : (e >= 1, e.toFixed(1) + ' M');
}
function r(e, t) {
	return e == 0 ? 0 : ((t - e) / t) * 100;
}
export { o as c, n as f, r as g };
