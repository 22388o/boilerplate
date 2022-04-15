const { expect } = require('chai');
const { buildContractClass } = require('scryptlib');
const { compileContract } = require('../../helper');

describe('Test sCrypt contract CTC In Javascript', () => {
  let test, result

  before(() => {
    const Test = buildContractClass(compileContract('shiftTest.scrypt'));
    test = new Test();
  });

  it('should return true', () => {
    result = test.unlock(1, 3).verify()
    expect(result.success, result.error).to.be.true

    result = test.unlock(-1, 3).verify()
    expect(result.success, result.error).to.be.true

    result = test.unlock(-1000, 3).verify()
    expect(result.success, result.error).to.be.true
  });


});
