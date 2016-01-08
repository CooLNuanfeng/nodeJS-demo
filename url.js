var url = require('url');

var urlStr = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash';

console.log(url);
console.log(url.parse(urlStr,true,true).pathname);
