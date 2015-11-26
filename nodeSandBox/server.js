/**
 * Created by rost on 26.11.15.
 */

module.exports = (function() {
	"use strict";

	var http = require("http"),
	onRequest = function (request, response) {
		console.log("Request received.");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	};

	var obj = {
		start: function() {
			http.createServer(onRequest).listen(8888);
		}
	};

	return obj;
})();