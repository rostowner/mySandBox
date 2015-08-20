"use strict";

var Person = function(obj) {
	var _sexEnum = {
			male: 1,
			female: 0
		},
		_name = obj.name || "",
		_age = obj.age || 25,
		_sex = obj.sex || _sexEnum.male;

		return {
				setName: function() {

				},
				getName: function() {

				},
				setAge: function() {

				},
				getAge: function () {
					// body...
				},
				setSex: function () {
					// body...
				},
				getSex: function () {
					// body...
				},
				say: function () {
					console.log("Hi "+_name);
				}
		};
};

var rost = new Person({name: "Rost", age: 27, sex: 1});
var ivan = new Person({name: "Ivan", age: 25, sex: 1});

rost.say();
ivan.say();
