var io = require('socket.io').listen(80);

io.socket.on('connection',function(socket){
	socket.emit('news',{hello:'world'}); //发送一个消息到客户端
	socket.on('my other event',function(data){ //接受客户端发过来的消息
 		console.log(data);
	});
});