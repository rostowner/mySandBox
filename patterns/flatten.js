"use strict";

var flatten = function(arr) {
	var f = function (item) {
		if (item && item.length) {
			return flatten(item);
		} else {
			return item;
		}
	};
	return [].concat(arr.map(f));
}

var a = [1, 2, 3, [4, 5, [6, 7, [0], {}], null]];

var res = flatten(a);
console.log(res);