

/// 查看目录

var fs = require("fs");

console.log("查看 /tmp 目录");
fs.readdir("/tmp/",function(err, files){
   if (err) {
       return console.error(err);
   }
   // files 为 目录下的文件数组列表。
   files.forEach( function (file){
       console.log( file );
   });
});