const expect = require('chai').expect;
const myapp = require(".");

describe('Testing printMsg function, should return "Hello There!" ', () => {
	it('Should Return Hello There!', () => {
        expect(myapp.printMsg()).to.equal("Hello There!");
	});
});

describe('Testing printBye function, should return "Bye!" ', () => {
	it('Should Return Bye!', () => {
        expect(myapp.printBye()).to.equal("Bye!");
	});
});

describe('Testing printSky function, should return "Sky!" ', () => {
	it('Should Return Sky!', () => {
        expect(myapp.printSky()).to.equal("Sky!");
	});
});
