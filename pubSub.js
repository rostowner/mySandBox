"use strict";

var events = function() {
	types = {
		any: []
	},
	on: function (type, fn, context) {
		this.type = type || "any";
		fn = typeof fn === "function"? fn: context[fn];
		if (typeof this.types[type] === "undefined") {
			this.types[type] = [];
		}
		this.types[type].push({fn: fn, context: context || this});
		return this;
	},
	off: function (type, fn, context) {
		this.proceedAction("off", type, fn, context);
		return this;
	},
	trigger: function (type, data) {
		this.proceedAction("on", type, fn, context);
		return this;
	},
	proceedAction: function (action, type, args, context) {
		var pubType = type || "any",
			types = this.types[pubType],
			i,
			max = types? types.length: 0;

			for (i = 0; i < max; i += 1) {
				if (action === "on") {
					types[i].fn.call(types[i], context, args);
				} else {
					if (types[i].fn === args 
						&& types[i].fn === context) {
						types.splice(i, 1);
					}
				}
			}
	}
};

var Person = function (name) {
	this.name = name || "Ogo";
};
Person.prototype = {
	constructor: Person,
	congrat: function (str) {
		str = str || "Hi";
		console.log(str + " " + this.name);
		events.trigger("rec", str);
	}
}

var Log = function () {
	this.eventList = [];
};
Log.prototype = {
	constructor: Log,
	rec: function (event) {
		this.eventList.push(event);
	},
	see: function () {
		console.log(this.eventList);
	}
};

var ivan = new Person("Ivan");
var list = new Log();

list.on("rec", list.rec);

ivan.congrat();