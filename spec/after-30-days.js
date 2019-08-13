const expect = require('chai').expect;

const test = require('../src/test');

describe("My Test", function() {

  it("should foo", function() {
    const _test = new test();
    _test.run();
  });

});
