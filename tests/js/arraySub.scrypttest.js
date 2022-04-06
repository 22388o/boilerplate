const { expect } = require('chai');
const { buildContractClass, buildTypeClasses, Bytes } = require('scryptlib');
const { compileContract } = require('../../helper');

describe('Test sCrypt contract ArraySub In Javascript', () => {
  let c, result;

  before(() => {

  });

  it('arraySub1 should unlock succeeded', () => {
    const C = buildContractClass(compileContract('arraySub1.scrypt'));
    const { ST1, ST2, ST3, ST4, L } = buildTypeClasses(C);

    c = new C(1, [new ST2({
      "s": [new ST1({
        "x": 0
      }), new ST1({
        "x": 1
      })]
    })], [
      [0, 1], [2, 3]
    ]);
    result = c.unlock(0).verify()
    expect(result.success, result.error).to.be.true
  });

  it('arraySub2 should unlock succeeded', () => {
    const C = buildContractClass(compileContract('arraySub2.scrypt'));
    const { ST1, ST2, ST3, ST4, L } = buildTypeClasses(C);

    c = new C(1, [new ST2({
      "s": [new ST1({
        "x": 0
      }), new ST1({
        "x": 1
      })]
    })], [
      [0, 1], [2, 3]
    ]);
    result = c.unlock(0).verify()
    expect(result.success, result.error).to.be.true
  });

  it('arraySub3 should unlock succeeded', () => {
    const C = buildContractClass(compileContract('arraySub3.scrypt'));
    const { ST1, ST2, ST3, ST4, L } = buildTypeClasses(C);

    c = new C();
    result = c.unlock().verify()
    expect(result.success, result.error).to.be.true
  });


  it('arraySub4 should unlock succeeded', () => {
    const C = buildContractClass(compileContract('arraySub4.scrypt'));
    const { ST1, ST2, ST3, ST4, L } = buildTypeClasses(C);

    c = new C(1, [new ST2({
      "s": [new ST1({
        "x": 0
      }), new ST1({
        "x": 1
      })]
    })], [
      [0, 1], [2, 3]
    ]);

    result = c.unlock(0, [new ST3({
      s : [[new ST1({
        "x": 0
      }), new ST1({
        "x": 0
      })], [new ST1({
        "x": 0
      }), new ST1({
        "x": 0
      })]],
      "a": false,
      "b": new Bytes("")
    })], [[[0,0], [0, 0]], [[0,0], [0, 0]]]).verify()
    expect(result.success, result.error).to.be.true
  });


  it('arraySub5 should unlock succeeded', () => {
    const C = buildContractClass(compileContract('arraySub5.scrypt'));
    const { ST1, ST2, ST3, ST4, L } = buildTypeClasses(C);

    c = new C(1, [new ST2({
      "s": [new ST1({
        "x": 0
      }), new ST1({
        "x": 1
      })]
    })], [
      [0, 1], [2, 3]
    ]);

    result = c.unlock(1).verify()
    expect(result.success, result.error).to.be.true
  });

  it('arraySub6 should unlock succeeded', () => {
    const C = buildContractClass(compileContract('arraySub6.scrypt'));
    const { ST1, ST2, ST3, ST4, L } = buildTypeClasses(C);

    c = new C(1, [new ST2({
      "s": [new ST1({
        "x": 0
      }), new ST1({
        "x": 1
      })]
    })], [
      [0, 1], [2, 3]
    ]);

    result = c.unlock(1).verify()
    expect(result.success, result.error).to.be.true
  });

});
