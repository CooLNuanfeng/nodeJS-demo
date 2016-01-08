var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var text = '';

app.get('/',function(req,res){	
	res.sendFile(__dirname+'/ioIndex.html');
});

io.on('connection',function(socket){
	
	socket.on('chat message',function(msg){
		text = msg;
		console.log('message:' + msg);
		socket.emit('come in',{"text": text});
	});
});

http.listen(3000,function(){
	console.log('listen on 3000');
});