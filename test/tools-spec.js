
const expect = require('chai').expect;
const should = require('chai').should;
const assert = require('chai').assert;
const tools = require('../lib/tools');

describe('tools', () => {
    describe("printName()", () => {
        it('It should print the first name first', () => {
           const results = tools.printName({
               first: "Max",
               second: "Tayebwa"
           });
    
           expect(results).to.equal("Tayebwa, Max");
        });
    });
});