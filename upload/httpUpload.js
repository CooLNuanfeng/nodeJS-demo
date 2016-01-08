var formidable = require('formidable'),
	url = require('url'),
	http = require('http'),
	fs = require('fs');



http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;
	var realPath = __dirname + pathname;
	// console.log(pathname,'pathname');
	// console.log(realPath,'realPath');
	switch(pathname){
		case '/upload':
			goUpload(res,req);
			break;
		case '/index':
		case '/':
			goIndex(res);
			break;
		default:
			getStaticFile(pathname,realPath,res,req);
			break;
	}
}).listen(3000);

function goIndex(res){
	var path = __dirname +'/'+ url.parse('index.html').pathname;
	var indexPage = fs.readFileSync(path);
	res.writeHead(200,{'content-type':'text/html'});
	res.end(indexPage);
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


function goUpload(res,req){
	var readPath = __dirname + '/' + url.parse('show_image.html').pathname;
	var indexPage = fs.readFileSync(readPath);

	var form = new formidable.IncomingForm();
	form.encoding='utf-8';
	form.parse(req,function(err,fields,files){
		//console.log(files);
		fs.renameSync(files.image.path, __dirname + '/uploadFile/pic.jpg');
		res.writeHead(200,{'content-type':'text/html'});
		res.end(indexPage);
	});
}