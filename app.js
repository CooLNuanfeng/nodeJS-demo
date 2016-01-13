var http = require('http'),
    httpParam = require('./httpParam'),
    nodeStatic = require('node-static');

http.createServer(function(req,res){
    httpParam.init(req,res);
    if(req.method.toLowerCase() == 'get'){
        console.log(httpParam.GET());
    }
    if(req.method.toLowerCase() == 'post'){
        httpParam.POST('',function(param){
            console.log(param);
        });
    }
    //获取静态资源文件
    var fileServer = new nodeStatic.Server();
    req.addListener('end', function () {
        fileServer.serve(req, res);
    }).resume();
}).listen(3000);
