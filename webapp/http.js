var http = require('http'),
	fs = require('fs'),
	url = require('url'),
	BASE_DIR = __dirname,
	CACHE_TIME = 60 * 60 * 24;

http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;
	var realPath = __dirname + '/' + pathname;
	
	// console.log(__dirname);
	// console.log(req.url);
	// console.log(req.method);
	// console.log(req.headers);

	switch(pathname){
		case '/index':
		case '/' :
			resIndex(res);
			break;
		case '/img':
			resImage(res);
			break;
		default : 
			dealWithStatic(pathname,realPath,res,req);
	}

}).listen(3000);


//加载页面中的其他资源，目前只针对 css 和 img
function dealWithStatic(pathname,realPath,res,req){
	fs.exists(realPath,function(exists){
		if(!exists){
			res.writeHead(404,{'content-type':'text/plain'});
			res.end('This request URL '+pathname + ' was not found on this server.');
		}else{

			var fileInfo = fs.statSync(realPath);
			var lastModified = fileInfo.mtime.toUTCString();

			console.log(fileInfo); // 文件的一些信息

			var date = new Date();
			date.setTime(date.getTime() + CACHE_TIME * 1000);
			res.setHeader('Expires',date.toUTCString());
			res.setHeader('Cache-Control','max-age='+CACHE_TIME);


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
				default:
					mmieType = 'text/plain';
					break;
			}

			if(req.headers['if-modified-since'] && lastModified == req.headers['if-modified-since']){
				res.writeHead(304,'Not Modified');
				res.end();
			}else{
				fs.readFile(realPath,function(err,file){
					if(err){
						res.writeHead(500,{'content-type':'text/plain'});
						res.end(err);
					}else{
						res.setHeader('Last-Modified',lastModified);
						res.writeHead(200,{'content-type':mmieType});
						res.end(file);
					}
				});
			}			
			
		}
	});
}

function resIndex(res){
	var readPath = __dirname + '/' + url.parse('index.html').pathname;
	var indexPage = fs.readFileSync(readPath);
	res.writeHead(200,{'content-type':'text/html'});
	res.end(indexPage);
}

function resImage(res){
	var readPath = __dirname + '/' + url.parse('pic.jpg').pathname;
	var indexPage = fs.readFileSync(readPath);
	res.writeHead(200,{'content-type': 'image/jpg'});
	res.end(indexPage);
}

function resDefault(res){
	res.writeHead(404,{'content-type':'text/plain'});
	res.end('Not Found');
}











