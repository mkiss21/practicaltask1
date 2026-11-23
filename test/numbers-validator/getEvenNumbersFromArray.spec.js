const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('getEvenNumbersFromArray', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return only even numbers from an array', () => {
    expect(
      validator.getEvenNumbersFromArray([1, 2, 3, 4]),
    ).to.deep.equal([2, 4]);
  });

  it('should throw an error if input is not an array', () => {
    expect(() => validator.getEvenNumbersFromArray('123')).to.throw(
      '[123] is not an array of "Numbers"',
    );
  });

  it('should throw an error if array contains non-number values', () => {
    expect(() => validator.getEvenNumbersFromArray([1, '2', 3])).to.throw(
      '[1,2,3] is not an array of "Numbers"',
    );
  });
});
