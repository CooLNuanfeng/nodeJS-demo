var crypto = require('crypto');

var key = 'salt_from',   // 加密密钥
    plainText = 'blue',
    cipher = crypto.createCipher('aes-256-cbc',key),
    decipher = crypto.createDecipher('aes-256-cbc',key);

cipher.update(plainText,'utf8','hex');   // 三个参数 1.加密文字 2.编码方式 3.加密内容的输出方式
var encryptedPassword = cipher.final('hex');

decipher.update(encryptedPassword,'hex','utf8');
var decryptePassword = decipher.final('utf8');

console.log('encrypted: ' + encryptedPassword);
console.log('decrypted: '+ decryptePassword);
