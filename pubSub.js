"use strict";

var events = (function() {
	var types = {
		any: []
	};
	return {
		on: function (type, fn, context) {
			this.type = type || "any";
			fn = (typeof fn === "function")? fn: context[fn];
			if (typeof types[type] === "undefined") {
				types[type] = [];
			}
			types[type].push({fn: fn, context: context || this});
			//return this;
		},
		off: function (type, fn, context) {
			this.proceedAction("off", type, fn, context);
			// return this;
		},
		trigger: function (type, fn) {
			this.proceedAction("on", type, fn);
			// return this;
		},
		proceedAction: function (action, type, args, context) {
			var pubType = type || "any",
				inTypes = types[pubType],
				i,
				max = inTypes? inTypes.length: 0;

				for (i = 0; i < max; i += 1) {
					if (action === "on") {
						inTypes[i].fn.call(inTypes[i].context, args);
					} else {
						if (inTypes[i].fn === args
							&& inTypes[i].context === context) {
							inTypes.splice(i, 1);
						}
					}
				}
		}
	}
}());

var Person = function (name) {
	this.name = name || "Ogo";
};
Person.prototype = {
	constructor: Person,
	congrat: function (str) {
		str = str || "Hi";
		console.log(str + " " + this.name);
		events.trigger("rec", function() {
			console.log("YES!!!");
		});
	}
};

var Log = function () {
	this.eventList = [];
};
Log.prototype = {
	constructor: Log,
	rec: function (event) {
		if (!event) {
			return;
		}
		this.eventList.push(event);
	},
	see: function () {
		console.log([].concat(this.eventList.map(function(x){return x;})));
	}
};

var ivan = new Person("Ivan");
var list = new Log();

events.on("rec", list.rec, list);
events.on("see", list.see, list);


list.rec("aboo1");
list.rec("aboo2");
list.rec("aboo3");

events.trigger("rec", "Oppa1");
events.trigger("rec", "Oppa2");
events.trigger("rec", "Oppa3");
events.trigger("rec", 1);
events.trigger("see");
