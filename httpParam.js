var _res,_req,
    url = require('url'),
    querystring = require('querystring');

exports.init = function(req,res){
    _res = res;
    _req = req;
};

exports.GET = function(key){
    var paramStr = url.parse(_req.url).query;
    var param = querystring.parse(paramStr);
    if(key){
        return param[key] ? param[key] : '';
    }else{
        return param;
    }

};

exports.POST = function(key,callback){
    var postData = '';
    _req.addListener('data',function(chunk){
        postData += chunk;
    });
    _req.addListener('end',function(){
        var param = querystring.parse(postData);
        if(key!==''){
            callback(param[key] ? param[key]:'');
            return ;
        }
        callback(param);
    });
};
