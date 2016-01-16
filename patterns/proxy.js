// proxy

"use strict";
(function () {
	var input = document.getElementById("input"),
		proxy = (function () {
			function show (e) {
				var val = e.target.value;
				if (val.length > 2) {
					console.log(val)
				};
			}
			return {
				show: show
			};
		}()),
		viewEvents = (function () {
			var on, off;
			if (typeof window.addEventListener === 'function') {
				on = function (el, type, fn) {
					el.addEventListener(type, fn, false);
				};
				off = function (el, type, fn) {
					el.removeEventListener(type, fn, false);
				};
			} else if (typeof document.attachEvent === 'function') {
				on = function (el, type, fn) {
					el.attachEvent('on' + type, fn);
				};
				off = function (el, type, fn) {
					el.detachEvent('on' + type, fn);
				};
			}

			 return {
			 	on: on,
			 	off: off
			 };
		}());
	
	viewEvents.on(input, "keyup", function (e) {
		proxy.show(e);
	});

}());
