

var fs = require("fs");

var buf = new Buffer(2048*1000);

console.log("准备打开已经存在的文件！");

fs.open('input.txt','r+',function  (err,fd) {
	if (err) {
		return console.error(err);
	}

	console.log("文件打开成功。。");
	console.log('准备读取文件');

	fs.read(fd,buf,0,buf.length,0,function  (err,bytes) {
		if (err) {
			console.log(err);
			return;
		};

		console.log(bytes+" 字节被读取");

		// 仅输出读取的字节
		if (bytes > 0) {
			console.log(buf.slice(0,bytes).toString());
		};

		console.log(bytes+" 字节被读取",fd);

		// 关闭文件
		fs.close(fd,function  (err) {
			if (err) {
				console.log(err);
				return;
			}
			console.log("关闭文件成功");
		});
		
	});
});