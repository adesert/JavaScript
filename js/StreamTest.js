

///%%%%%% 读入流

// var fs = require("fs");
// var data = '';

// // 创建可读流
// var readerStream = fs.createReadStream('input.txt');

// // 设置编码为Utf-8
// readerStream.setEncoding('UTF8');

// // 处理流事件-- > data,end,error
// readerStream.on('data',function  (chunk) {
// 	data += chunk;
// });

// readerStream.on('end',function  () {
// 	console.log(data);
// });

// readerStream.on('error',function  (err) {
// 	console.log(err.stack);
// });

// console.log("程序执行完毕!!!");





//// %%%%%%%%%%  写入流

var fs = require("fs")
var data = '....了历史老师老师老师';

// 创建一个可以写入的流，写入到文件output.txt 中
var writerStream = fs.createWriteStream('output.txt');

// 使用UTF8编码写入数据
writerStream.write(data,'UTF8');

// 标记文件末尾
writerStream.end();

// -- 处理流事件 data,on ,error,
writerStream.on('finish',function  () {
	console.log('写入完成。。。');
});

writerStream.on('error',function  (err) {
	console.log(err.stack);
});

console.log('执行完毕。。。');

