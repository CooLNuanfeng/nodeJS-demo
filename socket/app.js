var http = require('http'),
	fs  = require('fs'),
	url = require('url'),
	querystring = require('querystring'),
	jade = require('jade'),
	socket = require('socket.io');

var filePath = __dirname +'/test.txt';

var app = http.createServer(function(req,res){
	res.render = function(template,jsonData){
		var str = fs.readFileSync(template,'utf8');
		var fn = jade.compile(str,{filename:template,pretty:true});
		var html = fn(jsonData);
		res.writeHead(200,{'content-type':'text/html'});
		res.end(html);
	};

	var pathname = decodeURI(url.parse(req.url).pathname);
	var realPath = __dirname + pathname;

	switch(pathname){
		case '/':
		case '/index':
			goIndex(res);
			break;
		default:
			getStaticFile(pathname,realPath,res,req);
			break;
	}

}).listen(3000);


var io = socket.listen(app);


io.on('connection',function(socket){

	var message = fs.readFileSync(filePath, 'utf8');

	socket.emit('fromServer',{msg:message});
	
	
	socket.on('fromClient',function(data){
		fs.writeFile(filePath,data.msg,function(){
			socket.emit('saveSuccess',{msg:'success'});
		});
	});
});




function goIndex(res){
	res.render('index.jade',{});
}


//获取服务器端的静态资源  简易版
function getStaticFile(pathname,realPath,res,req){
	fs.exists(realPath, function(exists){
		if(!exists){
			res.writeHead(404,{'content-type':'text/plain'});
			res.end('This request URL '+pathname + ' was not found on this server.');
		}else{
			var pointPostion = pathname.lastIndexOf('.'),
				mmieString = pathname.substring(pointPostion+1),
				mmieType;

			switch(mmieString){
				case 'css':
					mmieType = 'text/css';
					break;
				case 'jpg':
					mmieType = 'image/jpg';
					break;
				case 'js':
					mmieType = 'text/javascript';
					break;
				default:
					mmieType = 'text/plain';
					break;
			}

			fs.readFile(realPath,function(err,file){
				if(err){
					res.writeHead(500,{'content-type':'text/plain'});
					res.end(err);
				}else{
					res.writeHead(200,{'content-type':mmieType});
					res.end(file);
				}
			});
		}
	});
}
