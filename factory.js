/**
 * Created by rost on 21.08.15.
 */
// factory
(function() {
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
        introduceMe: function () {
            var str = "Hello! My _name is " + this._name + ", I'm " + this._age + " y.o., I'm " + this._type + ", and have " + this._height + "sm";
            console.log(str);
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

    ivan.introduceMe();
    olya.introduceMe();
    bill.introduceMe();
    elza.introduceMe();


}());
