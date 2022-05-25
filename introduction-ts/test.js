const expect = require('chai').expect;
const myapp = require(".");

describe('Testing printIntro function, should return "Hello World! My name is FirstName."', () => {
	it('Should Return Hello World! My name is FirstName.', () => {
        expect(myapp.printIntro('FirstName')).to.equal("Hello World! My name is FirstName.");
	});
});
