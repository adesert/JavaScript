console.log("hello world!");


// __filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。

console.log( __filename );

// 输出全局变量 __dirname 的值
console.log( __dirname );


function printHello () {
	console.log("------hello----");
}

// 200 毫秒执行函数printHello

var timeHandler = setTimeout(printHello,200);

// 清除计时器
clearTimeout(timeHandler);


var handler2 = setInterval(printHello,1/60*1000);

clearInterval(handler2);



/////////////////////////////////////////////////////////////////////////////////


process.on('exit', function(code) {

  // 以下代码永远不会执行
  setTimeout(function() {
    console.log("该代码不会执行");
  }, 0);
  
  console.log('退出码为:', code);
});
console.log("程序执行结束");



////////////////////////////////////////


// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// 获取执行路局
console.log(process.execPath);


// 平台信息
console.log(process.platform);


///////////////////////////////////////////////
// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());
