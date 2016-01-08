var formidable = require('formidable'),
	jade = require('jade'),
	url = require('url'),
	http = require('http'),
	fs = require('fs');



http.createServer(function(req,res){

	// 方式二 直接给res 添加render 方法
	// res.render = function(template,options){
	// 	//同步读取jade模板中的文件数据
	// 	var str = require('fs').readFileSync(template,'utf8');
	// 	//获取jade模板编译处理函数
	// 	var fn = jade.compile(str,{filename:template,pretty:true});
	// 	//调用fn 将 jade模板转为html同时传入数据
	// 	var html = fn(options);
	// 	res.writeHead(200,{'content-type':'text/html'});
	// 	res.end(html);
	// };


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
	render(res,'index.jade',{'user' : 'blue'});
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


function render(res,template,options){
	//同步读取jade模板中的文件数据
	var str = require('fs').readFileSync(template,'utf8');
	//获取jade模板编译处理函数
	var fn = jade.compile(str,{filename:template,pretty:true});
	//调用fn 将 jade模板转为html同时传入数据
	var html = fn(options);
	res.writeHead(200,{'content-type':'text/html'});
	res.end(html);

}


function goUpload(res,req){
	var timestamp = Date.parse(new Date());
	
	var form = new formidable.IncomingForm();
	form.encoding='utf-8';
	form.parse(req,function(err,fields,files){
		//console.log(files);
		var fileName = timestamp + '_' + files.image.name;
		fs.renameSync(files.image.path, __dirname+'/uploadFile/'+fileName);
		render(res,'show_image.jade',{'name':'blue','imgUrl':'/uploadFile/'+fileName});
	});
}