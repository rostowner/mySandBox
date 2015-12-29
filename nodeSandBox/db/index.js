
var loc;

exports.connect = function() {
	loc = require('./loc');
};

exports.getLoc = function(name) {
	if (!loc[name]) {
		throw new Error('no such loc.item: ' + nane);
	}
	return loc[name];
};