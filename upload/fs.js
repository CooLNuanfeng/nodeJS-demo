var fs = require('fs');
var BASE_DIR = __dirname;

fs.renameSync(BASE_DIR+'/file.txt', BASE_DIR+'/uploadFile/file.txt');

//fs.chmodSync(BASE_DIR+'/file.txt', '777');