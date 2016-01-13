var crypto = require('crypto');
var md5Hash = crypto.createHash('md5');

md5Hash.update('blue');
var encode = md5Hash.digest('hex');

console.log('md5: '+encode);

var sha1Hash = crypto.createHash('sha1');
sha1Hash.update('blue');
var encode = sha1Hash.digest('hex');

console.log('sha1: ' + encode);


var sha256Hash = crypto.createHash('sha256');
sha256Hash.update('blue');
var encode = sha256Hash.digest('hex');

console.log('sha256: ' + encode);

var sha512Hash = crypto.createHash('sha512');
sha512Hash.update('blue');
var encode = sha512Hash.digest('hex');

console.log('sha512: ' + encode);
