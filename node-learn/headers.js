// http://127.0.0.1/echo?message=Hello

var http = require('http');
var url = require('url');

var server = new http.Server(function(req, res) {

  var parsedURL = url.parse(req.url, true);

  if (parsedURL.pathname === '/echo' && parsedURL.query.message) {
    // res.writeHeader(200, 'OK', {Cache-controll': 'no-cache'}); or...
     res.statusCode = 200;
     res.setHeader('Cache-controll', 'no-cache');
    res.end(parsedURL.query.message);
  } else {
    res.statusCode = 404;
    res.end('Page not found!');
  }

});

server.listen(1337, '127.0.0.1');
