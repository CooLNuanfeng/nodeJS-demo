var fs = require('fs');
var path = require('path');

exports.goIndex = function(req,res){
	var readSrc = path.normalize(__dirname+'/..');
	var readFile = fs.readFileSync(readSrc+'/index.html');

	res.writeHead(200,{'Content-Type':"text/html"});
	res.end(readFile);
};