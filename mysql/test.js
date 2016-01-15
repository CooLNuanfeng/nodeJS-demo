var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'loaclhost',
    user : 'root',
    password : ''
});

connection.connect(function(err){
    if(err){
        console.log('connect fail');
    }else{
        console.log('connect success');
    }
});

connection.end(function(err){
    if(err){
        console.log('closed fail');
    }else{
        console.log('closed success');
    }
});
