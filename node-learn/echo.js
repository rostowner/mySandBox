// http://127.0.0.1/echo?message=Hello -> Hello

var http = require('http');
var url = require('url');

var server = new http.Server(function(req, res) {
  console.log(req.method, req.url);

  var parsedURL = url.parse(req.url, true);
  console.log(parsedURL);

  if (parsedURL.pathname === '/echo' && parsedURL.query.message) {
    res.end(parsedURL.query.message);
  } else {
    res.statusCode = 404;
    res.end('Page not found!');
  }

});

server.listen(1337, '127.0.0.1');
