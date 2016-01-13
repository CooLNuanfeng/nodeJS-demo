var res,req,
    fs = require('fs'),
    url = require('url'),
    crypto = require('crypto'),
    httpParam = require('../httpParam');

exports.init = function(request,response){
    res = response;
    req = request;
    httpParam.init(req,res);
};

exports.index = function(){
    var realPath = __dirname +'/' + url.parse('index.html').pathname;
    var indexPage = fs.readFileSync(realPath);
    res.writeHead(200,{'content-type':'text/html'});
    res.end(indexPage);
};

exports.cipher = function(){
    var key = httpParam.GET('key'),
        plainText = httpParam.GET('plainText'),
        cipher = crypto.createCipher('aes-256-cbc',key);

    cipher.update(plainText,'utf8','hex');
    var encryptePassword = cipher.final('hex');
    res.writeHead(200,{'content-type':'text/html'});
    res.end(encryptePassword);
};

exports.decipher = function(){
    var key = httpParam.GET('key'),
        plainText = httpParam.GET('plainText'),
        decipher = crypto.createDecipher('aes-256-cbc',key);

    decipher.update(plainText,'hex','utf8');
    var decryptedPassword = decipher.final('utf8');
    res.writeHead(200,{'content-type':'text/html'});
    res.end(decryptedPassword);
};
