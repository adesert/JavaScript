
// >>管道流
// 管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。

// 以下实例我们通过读取一个文件内容并将内容写入到另外一个文件中。


var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('output.txt');

// 创建一个可写入流
var writerStream = fs.createWriteStream('outtxt.txt');

//管道读写操作
// 读取 pipetxt.txt 文件内容，并将内容写入到 outtxt.txt 文件中
readerStream.pipe(writerStream);

console.log("done....");


