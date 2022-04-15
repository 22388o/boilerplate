const { expect } = require('chai');
const { buildContractClass, Int, readLaunchJson } = require('scryptlib');
const { compileContract, getRandomInt } = require('../../helper');

describe('Test sCrypt contract identity In Javascript', () => {
  let test, result

  before(() => {
    const Test = buildContractClass(compileContract('identity.scrypt'));
    test = new Test();
  });



  it('bitwiseAlgebra should return true', () => {

    let counter = 10000;

    while (--counter > 0) {
      let x = new Int(getRandomInt(-100000000000, 100000000000));
      let y = new Int(getRandomInt(-100000000000, 100000000000));
      let z = new Int(getRandomInt(-100000000000, 100000000000));

      result = test.bitwiseAlgebra(x, y, z).verify()

      if(result.success === false) {
        console.log(JSON.stringify(readLaunchJson(result.error)))
      }
      expect(result.success, result.error).to.be.true
    }

  });

  it('boolAlgebra should return true', () => {

    let counter = 1000;

    while (--counter > 0) {
      let x = getRandomInt(-100000000000, 100000000000) > 0;
      let y = getRandomInt(-100000000000, 100000000000) > 0;
      let z = getRandomInt(-100000000000, 100000000000) > 0;

      result = test.boolAlgebra(x, y, z).verify()
      if(result.success === false) {
        console.log(JSON.stringify(readLaunchJson(result.error)))
      }
      expect(result.success, result.error).to.be.true
    }

  });

  it('mathAlgebra should return true', () => {

    let counter = 1000;

    while (--counter > 0) {
      let x = new Int(getRandomInt(-100000000000, 100000000000));
      let y = new Int(getRandomInt(-100000000000, 100000000000));
      let z = new Int(getRandomInt(-100000000000, 100000000000));

      result = test.mathAlgebra(x, y, z).verify()
      if(result.success === false) {
        console.log(JSON.stringify(readLaunchJson(result.error)))
      }
      expect(result.success, result.error).to.be.true
    }

  });


  it('shiftAlgebra should return true', () => {

    let counter = 1000;

    while (--counter > 0) {
      let x = new Int(getRandomInt(-100000000000, 100000000000));
      let y = new Int(getRandomInt(0, 1000));

      result = test.shiftAlgebra(x, y).verify()
      if(result.success === false) {
        console.log(JSON.stringify(readLaunchJson(result.error)))
      }
      expect(result.success, result.error).to.be.true
    }

    let x = new Int(getRandomInt(-100000000000, 100000000000));
    result = test.shiftAlgebra(x, -1).verify()
    expect(result.success, result.error).to.be.false

  });
  


});
