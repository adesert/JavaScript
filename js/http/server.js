
var http = require("http");
var url = require('url');
var querystring = require('querystring');


function start (route) {
	function onRequest(request,response) {
		var pathname = url.parse(request.url).pathname;
		if (pathname == '/favicon.ico') {
			return;
		};

		console.log("Request for "+request.url+" received.");

		route(pathname);


		var query = url.parse(request.url).query;
		console.log("query= "+query);

		// var sk = querystring(request.url)["sid"];
		// console.log("sid= " + sk);

		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("Hello world.");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;
