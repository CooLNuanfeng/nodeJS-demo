var res,req,
	fs = require('fs'),
	url = require('url');

exports.init = function(response,request){
	res = response;
	req = request;
};

exports.img = function(){
	var readPath = __dirname + '/' + url.parse('pic.jpg').pathname;
	var indexPage = fs.readFileSync(readPath);
	res.writeHead(200,{'content-type':'image/jpg'});
	res.end(indexPage);
};