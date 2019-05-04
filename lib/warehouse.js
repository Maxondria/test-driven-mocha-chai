module.exports = {
	packageAndShip(sku, qty) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const tracking = `TRCK-${sku.toString().toUpperCase()}-${qty}-PACKED`;
				resolve(tracking);
			  }, 1000);
		});
	},
};
