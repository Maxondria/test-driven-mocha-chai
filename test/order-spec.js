const expect = require('chai').expect;
const rewire = require('rewire');

const order = rewire('../lib/order'); //We have loaded this with rewire

describe('Making An Order', () => {
	//before each of our tests, let's create test data
	beforeEach(function() {
		this.testData = [
			{
				sku: 'AAAA',
				qty: 10,
			},
			{
				sku: 'BBBB',
				qty: 0,
			},
			{
				sku: 'CCCC',
				qty: 3,
			},
		];

		order.__set__('inventoryData', this.testData); //we wet the varible to this data instead
	});

	it('Order Item When We Have Enough Stock', done => {
		order.orderItem('CCCC', 2, tracking => {
			expect(tracking).to.be.equal('TRCK-CCCC-2-PACKED');
			done();
		});
	});

	it('Should return null if item is not enough In stock', done => {
		order.orderItem('CCCC', 5, tracking => {
			expect(tracking).to.be.equal(null);
			done();
		});
	});
});
