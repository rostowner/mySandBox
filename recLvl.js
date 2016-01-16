/**
 * Created by rost on 23.11.15.
 */
var expect = require("chai").expect,
    should = require("chai").should,
    assert = require("assert");

var recLvl = function(tree) {

    if (tree && tree.length) {

	    return tree;
    }

    return false;
};

describe("recLvl", function() {

    it("should be a function", function() {
        expect(recLvl).to.be.a("function");
    });

    it("should return false, if not an array", function() {
        var arr = 1;

        var res = recLvl(arr);

	    expect(res).to.be.false;

    });

	it("should return 1 if 1-lvl array", function() {
		var arr = [1,2,3];

		var res = recLvl(arr);

		expect(res).to.be.equal(1);
	});

});