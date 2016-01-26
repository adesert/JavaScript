

//链式流
//接下来我们就是用管道和链式来压缩和解压文件。

var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt, 文件为 input.txt.tar.gz

// fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));

// console.log("文件压缩完成。。。。");



// 解压 input.txt.gz 文件为 input.txt

fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('inputcompress.txt'));

console.log("文件解压完成。。。。");



// var hello = require('./hello');
// 代码 require('./hello') 引入了当前目录下的hello.js文件（./ 为当前目录，node.js默认后缀为js）。
// Node.js 提供了exports 和 require 两个对象，其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。

exports.world = function  () {
	console.log('hello world.....');
}

