const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('isAllNumbers', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true if all elements are numbers', () => {
    expect(validator.isAllNumbers([1, 2, 3])).to.be.equal(true);
  });

  it('should return false if array contains non-number values', () => {
    expect(validator.isAllNumbers([1, '2', 3])).to.be.equal(false);
  });

  it('should throw an error if input is not an array', () => {
    expect(() => validator.isAllNumbers('123')).to.throw(
      '[123] is not an array',
    );
  });
});
