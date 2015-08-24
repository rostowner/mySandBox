/**
 * Created by rost on 24.08.15.
 */
// memorize pattern
var expect = require("chai").expect,
    should = require("chai").should,
    assert = require("assert");

var memo = function() {
    var key = JSON.stringify(Array.prototype.slice.call(arguments));
    if (!memo.cache[key]) {
        var res;
        memo.cache[key] = {};

        res = JSON.stringify(Array.prototype.slice.call(arguments));

        memo.cache[key] = res;
    }

    return memo.cache[key];
};

memo.cache = {};

describe("Memo", function() {
    it("should be exist", function() {
        expect(memo).to.be.a("function");
    })
    it("should return 1", function() {
        assert.equal(memo(1), "[1]");
    })
});