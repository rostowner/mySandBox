/* facade/wrapper/... */

"use strict";

var calc = (function(){
	
	function _add(a, b) {
		// can be some magic
		return a + b;
	}

	function _minus (a, b) {
		// can be some magic
		return a - b;
	}

	return {
		add: function (a, b) {
			return _add(a, b);
		},
		minus: function (a, b) {
			return _minus(a, b);
		}
	}
}());