const expect = require('chai').expect;
const myapp = require(".");

describe('Testing printIntro function, should return "Hello There! My name is FirstName."', () => {
	it('Should Return Hello There! My name is FirstName.', () => {
        expect(myapp.printIntro('FirstName')).to.equal("Hello There! My name is FirstName.");
	});
});
