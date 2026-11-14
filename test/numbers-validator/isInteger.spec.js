const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('isInteger', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true if value is an integer', () => {
    expect(validator.isInteger(5)).to.be.equal(true);
  });

  it('should return false if value is not an integer', () => {
    expect(validator.isInteger(5.5)).to.be.equal(false);
  });

  it('should throw an error if value is not a number', () => {
    expect(() => validator.isInteger('5')).to.throw(
      '[5] is not a number',
    );
  });
});
