/**
 * Created by rost on 24.08.15.
 */
// memorize pattern
var expect = require("chai").expect,
    should = require("chai").should,
    assert = require("assert");

var memo = function() {

    var cache = {};
    return function(fn){
        var key = toString(Array.prototype.join.apply(arguments));
        if (!cache[key]) {
            cache[key] = {};
            cache[key] = fn; // todo: implement check if fn is FUNCTION
        }

        return cache[key];
    };
};

var mem = memo();

describe("Memo", function() {
    it("should be exist", function() {
        expect(mem).to.be.a("function");
    })
    it("should return 1", function() {
        assert.equal(mem(1), 1);
    })
});