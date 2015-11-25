/**
 * Created by rost on 21.08.15.
 */
// factory

    "use strict";


    var HumanMaker = function() {
        this._name = "";
        this._age = 0;
    }; // :)

    HumanMaker.prototype = {
        constructor: HumanMaker,
        setName: function (_name) {
            this._name = _name || "no _name";
        },
        setAge: function (_age) {
            this._age = _age || 0;
        },
        getAge: function () {
            return this._age;
        },
        getType: function () {
            return this._type;
        },
        introduceMe: function () {
            var str = "Hello! My name is " + this._name + ", I'm " + this._age + " y.o., I'm " + this._type + ", and have " + this._height + "sm";
            return str;
        }
    };

    HumanMaker.factory = function (type, args) {

        if (typeof HumanMaker[type] !== "function") {
            throw {
                _name: "error",
                message: "YOU ARE ABSOLUTELY WRONG!"
            };
        }

        if (typeof HumanMaker[type].prototype.setName !== "function") {
            HumanMaker[type].prototype = new HumanMaker();
        }

        return new HumanMaker[type](args);

    };

    HumanMaker.Man = function(obj) {
        this._type = "man";
        this._height = 175;
        this.setName(obj.name);
        this.setAge(obj.age);
    };

    HumanMaker.Woman = function(obj) {
        this._type = "woman";
        this._height = 165;
        this.setName(obj.name);
        this.setAge(obj.age);
    };

    HumanMaker.Boy = function(obj) {
        this._type = "boy";
        this._height = 100;
        this.setName(obj.name);
        this.setAge(obj.age);
    };

    HumanMaker.Girl = function(obj) {
        this._type = "girl";
        this._height = 100;
        this.setName(obj.name);
        this.setAge(obj.age);
    };

    var ivan = HumanMaker.factory("Man", {name: "Ivan", age: 27}),
        olya = HumanMaker.factory("Woman", {name: "Olya", age: 25}),
        bill = HumanMaker.factory("Boy", {name: "Bill", age: 7}),
        elza = HumanMaker.factory("Girl", {name: "Elza", age: 5});

var assert = require("assert");

describe('Factory', function() {
    it('Ivan should introduce', function () {
        assert.equal("Hello! My name is Ivan, I'm 27 y.o., I'm man, and have 175sm", ivan.introduceMe());
    });
    it('Olya should be 25 y.o.', function () {
        assert.equal(25, olya.getAge());
    });
    it('Ivan should be Man', function () {
        assert.equal("man", ivan.getType());
    });
    it('Olya should be Woman', function () {
        assert.equal("woman", olya.getType());
    });
    it('Bill should be Boy', function () {
        assert.equal("boy", bill.getType());
    });
    it('Elza should be Girls', function () {
        assert.equal("girl", elza.getType());
    });
    it('ivan should not be equal HumanMaker', function() {
        assert.notEqual(ivan, HumanMaker);
    });
});