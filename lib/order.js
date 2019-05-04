const inventoryData = require('../data/inventory.json');
const warehouse = require('./warehouse');

const findItem = sku => {
	const i = inventoryData.map(item => item.sku).indexOf(sku);

	if (i === -1) {
		console.log(`Item - ${sku} - not found`);
		return null;
	}
	return inventoryData[i];
};

const isInStock = (sku, qty) => {
	const item = findItem(sku);
	return item && item.qty > qty;
};

const orderItem = async (sku, qty, complete) => {
	complete = complete || function() {};
	if (isInStock(sku, qty)) {
		console.log(`Ordering ${qty} of Item # ${sku}`);
		const tracking = await warehouse.packageAndShip(sku, qty);
		
		console.log(`Order Shipped Tracking - ${tracking}`);
		complete(tracking);

	} else {
		console.log(`There is no ${qty} of Item # ${sku} in stock`);
		complete(null);
	}
};

exports.orderItem = orderItem;
