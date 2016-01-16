"use strict";

var enums = (function(){
	var obj = {
			sex: {
				male: 1,
				female: 0
			}
		};
	return {
		getEnum: function (name) {
			return obj[name];
		}
	};
}());

var Person = function(obj) {
	var sexEnum = enums.getEnum("sex"),
		_name = obj.name || "",
		_age = obj.age || 25,
		_sex = (obj.sex===0)? obj.sex: sexEnum.male;

		return {
				setName: function() {

				},
				getName: function() {
					return _name;
				},
				setAge: function() {

				},
				getAge: function () {
					return _age;
				},
				setSex: function () {
					// body...
				},
				getSex: function () {
					return _sex? "male": "female";
				},
				say: function () {
					console.log("Hi "+_name);
				}
		};
};

var Humans = (function(){
	
	var self = {},
		sexEnum = enums.getEnum("sex"),
		_list = [],
		_addHuman = function (obj) {
			_list.push(new Person({name: obj.name, age: obj.age, sex: obj.sex}));
		};
	
	self.init = function () {
		_addHuman({name: "Rost", age: 27, sex: sexEnum.male});
		_addHuman({name: "Ivan", age: 25, sex: sexEnum.male});
	}();

	self.getAllHumans = function () {
		console.log([].concat(_list.map(function (x) {
			return x.getName() + " " + x.getAge() + " " + x.getSex();
		})));
	};

	self.burnNewHuman = function (data) {
		if (!data) {
			return;
		}
		_addHuman(data);
	};

	return self;
}());

Humans.getAllHumans();
Humans.burnNewHuman({name: "Sara", age: 24, sex: enums.getEnum("sex").female});
Humans.getAllHumans();