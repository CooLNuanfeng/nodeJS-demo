// buffer
/*
var buf = new Buffer('hello world');

console.log(buf); // 十六进制

for(var i=0; i<buf.length; i++){
	//console.log(buf[i]); // 二进制
	console.log(String.fromCharCode(buf[i]));
}

console.log(buf.toString().length);
*/

//字符串 buffer 默认编码 utf-8
/*
var buf = new Buffer('你好！');
var buf1 = new Buffer('hello');
var buf2 = new Buffer('你好！','ascii');

console.log(buf);
console.log(buf.length);
console.log(buf.toString());

console.log(buf1);
console.log(buf1.length);
console.log(buf1.toString());

console.log(buf2);
console.log(buf2.length);
console.log(buf2.toString());
*/

// Buffer类
/*
var buf = new Buffer('hello');
var buf2 = new Buffer('你好');
var list = [buf,buf2];

console.log(buf,buf2);

console.log(Buffer.isEncoding('utf-8')); // 是否是 node支持的编码
console.log(Buffer.isBuffer(buf)); // 是否是buffer实例对象
console.log(Buffer.byteLength('你好'));  // 指定编码的字符串长度
console.log(Buffer.byteLength('你好','ascii'));
console.log(Buffer.concat(list,11));  // 11 是指定编码下的 buf长度的总和
*/

//buf 方法
var buf = new Buffer(10);
var buf1 = new Buffer('hello');
var buf2 = new Buffer('你好');
/*
	buf.write(string,[offset],[length],[encoding])
	string : 要写入的buffer 数据
	offset : 偏移量
	length : 要写入的字符串的字节长度
	encoding : 编码
*/
//buf.write('hello',2,3);
// buf.write('你好',2,3);
// console.log(buf);
// console.log(buf.toString());

/*
	buf.toString([encoding],[start],[end]);
	encoding: 要转换的编码 默认 utf-8
	start : 从第几个开始转换，默认为 0
	end :  到第几个结束，默认为 buf的length
*/
// console.log(buf1.toString());
// console.log(buf2.toString());

/*
	buf.toJSON()
	返回一个 JSON表示的Buffer实例。JSON.stringify将会默认调用来字符串序列化这个Buffer实例。
*/
// console.log(buf1.toJSON());
// var strData = buf1.toJSON().data;
// for(var i=0; i<strData.length; i++){
// 	console.log(String.fromCharCode(strData[i]));
// }

/*
	buf.copy(targetBuffer,[targetStart],[sourceStart],[sourceEnd])
	targetBuffer : 将要进行拷贝的buffer
	targetStart : 将要拷贝的目标开始偏移
	sourceStart : 源开始偏移位置，默认为0
	sourceEnd : 源结束位置，默认为 源的长度
*/

// buf1.copy(buf,3);
// console.log(buf1);
// console.log(buf);

/*
	buf.slice([start],[end]);
	修改这个新的buffer实例slice切片，也会改变原来的buffer
	start : 开始位置，默认 0
	end : 结束位置，默认为buf的length
*/
// var buf3 = new Buffer('hello world');
// console.log(buf3.toString());
// console.log(buf3.slice(1,8).toString());
// console.log(buf3.toString());


/*
	buf.writeUInt8(value,offset,[noAssert])
	value : value 必须是一个合法的 unsigned 8 bit interger
	offset : 偏移量
	noAssert : 设置参数 noAssert为true表示忽略验证value和offset参数。 这意味着 value可能过大，或者offset可能会超出buffer的末尾造成value被丢弃。 这个参数除了你非常有把握，否则不应该使用它。默认是 false。

*/

buf.writeUInt8(023,4);
console.log(buf);

/*
	buf.readUInt8(offset,[noAssert])
	offset: 偏移量
	noAssert : 显示原文其他翻译纠错。设置参数 noAssert为true表示忽略验证offset偏移量参数。 这意味着 offset可能会超出buffer的末尾。默认是 false。
*/

console.log(buf.readUInt8(4));















