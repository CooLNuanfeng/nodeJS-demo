/*
	基础教程 http://www.runoob.com/nodejs/nodejs-fs.html
*/

var fs = require('fs');

//打开文件
// fs.open('text.txt','r+',function(){
// 	console.log('文件打开成功！');
// });

//写入文件
// fs.writeFileSync('a.txt', '你好，欢迎使用 Node.js');
// console.log('写入的内容是：' + fs.readFileSync('a.txt') );

//重命名文件
// fs.rename('renameTest.txt','test.txt',function(){
// 	console.log(arguments);
// });

//文件属性读写
// fs.stat('test.txt',function(err,stats){
// 	console.log(arguments);
// 	if(err){
// 		return console.log('err');
// 	}
// 	console.log('是否是文件：'+stats.isFile());
// 	console.log('是否是文件夹：'+stats.isDirectory());
// });


//读取文件内容
// fs.readFile('test.txt', function(err,data){
// 	if(err){
// 		return console.log(err);
// 	}
// 	console.log('文件内容为：'+data);
// });
