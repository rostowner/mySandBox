
var loc = require('./db');
var log = require('./logger')(module);
function User(name) {
	this.name = name;
}

User.prototype.hello = function(who) {
	console.log(loc.getLoc('hello') + ', ' + who.name);
};

module.exports = User;