const { expect } = require('chai');
const { buildContractClass } = require('scryptlib');
const { compileContract } = require('../../helper');

describe('Test sCrypt contract CTC In Javascript', () => {
  let test, result

  before(() => {
    const Test = buildContractClass(compileContract('intBitwise.scrypt'));
    test = new Test();
  });

  it('should return true', () => {
    result = test.unlock(9, 1).verify()
    expect(result.success, result.error).to.be.true
  });

  it('should throw error', () => {
    result = test.unlock(8, 2).verify()
    expect(result.success, result.error).to.be.false
  });
});
