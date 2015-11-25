/**
 * Created by rost on 24.08.15.
 */
// memorize pattern
var expect = require("chai").expect,
    should = require("chai").should,
    assert = require("assert");

var add = (function() {
    var cache = {};

    return function(a, b) {
        var key = toString(a) + toString(b);
        if (!cache[key]) {
            cache[key] = a + b;
        }
        return cache[key];
    };
}());

describe("Cache", function() {
    it("should be exist", function() {
        expect(add).to.be.a("function");
    })
    it("should return 3", function() {
        assert.equal(add(1,2), 3);
    })
});