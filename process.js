//监听输入方法
/*process.stdin.on('data',function(a){
	//process.stdout.write('data: ' + a+'\n');
	console.log('data:'+a);
});*/


// 两个数相加
// var a,b;
// process.stdout.write('请输入数字a的值：');

// process.stdin.on('data',function(chunk){
// 	if(!a){
// 		a = Number(chunk);
// 		process.stdout.write('请输入数字b的值：');
// 	}else{
// 		b = Number(chunk);
// 		process.stdout.write('按ctrl+d键退出，得到a+b的值为：');
// 	}
// });

// process.stdin.on('end',function(){
// 	console.log(a+b);
// 	console.log('end');
// });



// nodejs api example 
/*process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write('data: ' + chunk);
  }
});

process.stdin.on('end', function() {
  process.stdout.write('end');
});
*/


// others process use
/*console.log(process.cwd());
process.chdir('test');
console.log(process.cwd());
console.log('当前运行的平台是：'+process.platform);

console.log(process.argv);
console.log(process.execArgv);*/




