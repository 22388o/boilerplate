const { expect } = require('chai');
const { buildContractClass, String } = require('scryptlib');
const { compileContract } = require('../../helper');

describe('Test sCrypt contract AsmString In Javascript', () => {
  let asmString, result;

  before(() => {
    const AsmString = buildContractClass(compileContract('asmString.scrypt'));
    asmString = new AsmString();
  });

  it('should return true', () => {
    result = asmString.unlock(new String("你好world! @ 😊")).verify()
    expect(result.success, result.error).to.be.true
  });

  it('should throw error', () => {
    result = asmString.unlock(new String("你好world！@ 😊")).verify()
    expect(result.success, result.error).to.be.false
  });
});
