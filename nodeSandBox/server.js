

var loc = require('./db');
var User = require('./user');
var log = require('./logger')(module);

loc.connect();

function run() {
	var rost = new User('Rost');
	var bob = new User('Bob');

	rost.hello(bob);
	log(loc.getLoc('success'));
}

if (module.parent) {
	exports.run = run;
} else {
	run();
}