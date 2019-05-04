module.exports = {
	packageAndShip(sku, qty, callback) {
		const tracking = `TRCK-${sku.toString().toUpperCase()}-${qty}-${Math.floor(Math.random() * 1200000)}`;
		callback(tracking);
	},
};
