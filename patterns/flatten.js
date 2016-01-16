"use strict";

var flatten1 = function(arr) {
	var f = function (item) {
		var type = typeof item;
		if (item && item.length) {
			return flatten1(item);
		} else if (type === 'number' && type !== 'object') {
			return item;
		}
	};

	return [].concat(arr.map(f));
}

var flatten2 = function (a) {
  var res = [];
    a.map(function(item) {
            var type = typeof item;
            if (item && item.length) {
              res = res.concat(flatten2(item));
            } else if (type === 'number' && type !== 'object') {
              res.push(item);
            }
          }
        );
    return res
};

var a = [1, 2, 3, [4, 5, [6, 7, [0], {}], null]];

var res1 = flatten1(a);
var res2 = flatten2(a);

console.log('1: ' + res1 + '\n2: ' + res2);