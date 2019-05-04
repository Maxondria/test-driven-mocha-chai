const expect = require('chai').expect;
const nock = require('nock');
//const should = require('chai').should;
//const assert = require('chai').assert;
const tools = require('../lib/tools');

describe('tools', () => {
	describe('printName()', () => {
		it('It should print the first name first', () => {
			const results = tools.printName({
				first: 'Max',
				second: 'Tayebwa',
			});

			expect(results).to.equal('Tayebwa, Max');
		});
	});

	describe('LoadWiki()', () => {
		//mock web server
		before(() => {
			nock('https://en.wikipedia.org')
				.get('/wiki/Abraham_Lincoln')
				.reply(200, 'Mock Abraham Lincoln Page');
        });
        
		it('should load Abraham Lincoln page', done => {
			tools.LoadWiki({ first: 'Abraham', last: 'Lincoln' }, html => {
                expect(html).to.be.equal('Mock Abraham Lincoln Page');
				done();
			});
		});
	});
});
