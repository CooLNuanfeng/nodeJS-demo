var querystring = require('querystring');
var dns = require('dns');

function getDns(domain,callback){
	dns.resolve(domain,function(err,addresses){
		if(addresses){
			addresses = addresses;
		}else{
			addresses = ['不存在改域名'];
		}
		callback(addresses);
	});
}


exports.goDns = function(req,res){
	var postData = '';
	req.addListener('data',function(chunk){
		postData += chunk;
	});

	req.addListener('end',function(){
		var domain = querystring.parse(postData).search_dns;
		getDns(domain,function(addresses){
			res.writeHead(200,{'Content-Type':"text/html"});
			res.end('<html><head><meta chartset="utf-8"></head><div>Domain:<span style="color:red">'+domain+'</span>IP:<span style="color:red">'+addresses.join(',')+'</span></div></html>')
		});
	});
};