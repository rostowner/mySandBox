function User(name) {
	this.name = name;
};

User.prototype.hello = function(who) {
	console.log('Hello, ' + who.name);
};

module.exports = User;