var http = require('http'),
    url = require('url'),
    doubleCrypto = require('./doubleCrypto');

http.createServer(function(req,res){
    doubleCrypto.init(req,res);
    var pathname = url.parse(req.url).pathname;
    switch (pathname) {
        case '/cipher':
            doubleCrypto.cipher();
            break;
        case '/decipher' :
            doubleCrypto.decipher();
            break;
        default:
            break;
    }
    doubleCrypto.index();
}).listen(3000);
