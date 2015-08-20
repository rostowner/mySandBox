"use strict";

var events = (function() {
	var events = {
		/*string: []*/
	};
	function on (type, fn) {
			this.type = type || "any";
			if (!events[type]) {
				events[type] = [];
			}
			events[type].push(fn);
			return this;
		};
	function off (type, fn) {
			if (!events[type]) {
				return this;
			}

			if (events[type].indexOf(fn) !== -1) {
				events[type].splice(indexOf(fn), 1);
			}
			delete events[type];

			return this;
		};
	function trigger (type, data) {
			if (!events[type]) { 
				return this; 
			}
			events[type].forEach(function (cb) {
				cb(data);
			});
			return this;
		};

	return {
		on: on,
		off: off,
		trigger: trigger
	}
}());

var Person = function (name) {
	var name = name || "Ogo";

	function congrat (str) {
		str = str || "Hi";
		console.log(str + " " + name);
		events.trigger("rec", function() {
			console.log("YES!!!");
		});
	}

	return {
		congrat: congrat
	}
};

var Log = function () {
	var eventList = [];
	function rec (event) {
		if (!event) {
			return;
		}
		eventList.push(event);
	};
	function see () {
		console.log([].concat(eventList.map(function(x){return x;})));
	};

	return {
		rec: rec,
		see: see
	}
};

var ivan = new Person("Ivan");
var list = new Log();

events.off("rec", list.rec)
	.on("rec", list.rec)
	.on("see", list.see);


list.rec("aboo1");
list.rec("aboo2");
list.rec("aboo3");

events.trigger("rec", "Oppa1");
events.trigger("rec", "Oppa2");

events.trigger("rec", "Oppa3");
events.trigger("rec", 1);
events.trigger("see");



