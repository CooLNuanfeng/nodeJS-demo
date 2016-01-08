var http = require('http'),
	url = require('url'),
	querystring = require('querystring');


http.createServer(function(req,res){
	var postData = '';
	req.setEncoding('utf8');
	req.addListener('data',function(chunk){
		postData += chunk;
	});

	req.addListener('end',function(){
		var param = querystring.parse(postData);
		console.log(param);
		res.writeHead(200,{'content-type':'text/plain'});
		res.end('success');
	});

}).listen(3000);