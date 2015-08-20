"use strict";

var events = (function() {
	var events = {
		/*string: []*/
	};
	return {
		on: function (type, fn) {
			this.type = type || "any";
			if (!events[type]) {
				events[type] = [];
			}
			events[type].push(fn);
			return this;
		},
		off: function (type, fn) {
			if (!events[type]) {
				return;
			}

			if (events[type].indexOf(fn)) {
				events[type].splice(indexOf(fn), 1);
			}
			delete events[type];

			return this;
		},
		trigger: function (type, data) {
			if (!events[type]) { 
				return; 
			}
			events[type].forEach(function (cb) {
				cb(data);
			});
			return this;
		}
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

events.off("rec", list.rec);

events.on("rec", list.rec);
events.on("see", list.see);


list.rec("aboo1");
list.rec("aboo2");
list.rec("aboo3");

events.trigger("rec", "Oppa1");
events.trigger("rec", "Oppa2");

events.trigger("rec", "Oppa3");
events.trigger("rec", 1);
events.trigger("see");



