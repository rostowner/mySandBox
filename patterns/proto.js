/**
 * Created by rost on 20.08.15.
 */
'use strict';

var ParentClass = function (name) {
    this.name = name || "someName";
    return this;
};
ParentClass.prototype = {
    constructor: ParentClass,
    say: function () {
        console.log(this.name);
    }
};

var ChildClass = function () {};

ChildClass.prototype = Object.create(ParentClass.prototype);
ChildClass.prototype.constructor = ChildClass;

var ivan = new ParentClass("Ivan");

//ivan.say();