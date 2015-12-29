 

 module.exports = function(module) {

 	return function() {
 		var args = [module.filename].concat([].slice.apply(arguments));
 		console.log.apply(console, args);
 	};

 };