
// Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。
// 使用 Express 可以快速地搭建一个完整功能的网站。

/// 使用Express 创建一个http 服务器

var express = require('express');
var app = express();

app.get('/',function  (req,res) {
	res.send('Hello GET');
});

app.post('/',function  (req,res) {
	res.send('Hello post');
});

//  /del_user 页面响应
app.delete('/del_user', function (req, res) {
   console.log("/del_user 响应 DELETE 请求");
   res.send('删除页面');
});

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
   console.log("/list_user GET 请求");
   res.send('用户列表页面');
});

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {   
   console.log("/ab*cd GET 请求");
   res.send('正则匹配');
});



var server = app.listen(8081,function  () {
	var host = server.address().address;
	var port = server.address().port;

	console.log("应用实例，访问地址为http://%s:%s",host,port);
});

console.log('done...');