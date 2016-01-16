
var loc = require('./db');

function User(name) {
	this.name = name;
}

User.prototype.hello = function(who) {
	console.log(loc.getLoc('hello') + ', ' + who.name);
};

module.exports = User;