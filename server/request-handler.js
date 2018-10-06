var request = require('request');
var http = require('http');
var fs = require('fs');
var url = require('url');


var fakeDatabase = {results: ['you are super!', 'you are super!', 'you are super!']};

// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.
var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

// function for handling requests
var requestHandler = function(request, response) {

  var headers = defaultCorsHeaders;

  headers['Content-Type'] = 'text/plain';

  if (request.url === '/classes/messages') {
    if (request.method === 'GET') {
      console.log('Serving request type ' + request.method + ' for url ' + request.url);
      response.writeHead(200, headers['Content-Type'] = 'application/json');
      response.end(JSON.stringify(fakeDatabase));
    }

    if (request.method === 'POST') {
      console.log('Serving request type ' + request.method + ' for url ' + request.url);
      //'data' here searches the request object for the data key and gets it!
      request.on('data', function(message) {
        message = JSON.parse(message);
        //unshift to add to top
        fakeDatabase.results.unshift(message);
        console.log(fakeDatabase)
      });
      request.on('end', function() {
        response.writeHead(201, headers['Content-Type'] = 'application/json');
        response.end(JSON.stringify(fakeDatabase.results));
      });
    }
  } else {
    response.writeHead(404, headers);
    response.end('You done messed up');
  }

};


module.exports = {requestHandler: requestHandler};

