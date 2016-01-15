var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('message',function(msg,info){
    var message = new Buffer('welcome to server');
    server.send(message,0,message.length,info.port,info.address);
    console.log("server get: " + msg + " from " + info.address + ':' + info.port);
});

server.on('listening',function(){
    var address = server.address();
    console.log("server listening " + address.address + ':' + address.port);
});
server.bind(41234);
