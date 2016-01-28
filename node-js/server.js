

var http = require("http");

http.createServer(function  (request, response) {
	 // 发送HTTP头部
	 // HTTP 状态码：200 OK
	 // 内容类型： text/plain
	 response.writeHead(200, {'Content-Type': 'text/plain'});
	 response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');