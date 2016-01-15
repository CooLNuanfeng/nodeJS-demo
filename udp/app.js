var dgram = require('dgram');
var client = dgram.createSocket('udp4');
var message = new Buffer('hi blue, node.js is waiting for you.');

client.on('message',function(msg){
    console.log("client get: " + msg + " from server.");
    client.close();
});
client.send(message,0,message.length,41234,"127.0.0.1",function(){
    console.log('send success');
});
