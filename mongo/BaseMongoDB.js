var Util = require('./util'),
    MongoClient = require('mongodb').MongoClient,
    dbClient,dbObj;

module.exports = function(){

    this.findAll = function(tableName,callback){
        connection(function(db){
            var collection = db.collection(tableName);
            var cursor = collection.find({});
            cursor.each(function(error, doc){
                if(doc!==null){
                    callback(doc);
                }
            });
        });
    };

    this.findByCondition = function(tableName,conJson,callback){
        connection(function(db){
            var collection = db.collection(tableName);
            var cursor = collection.find(conJson);
            cursor.each(function(error, doc){
                if(doc!==null){
                    callback(doc);
                }
            });
        });
    };

    this.insertOne = function(tableName,rowInfo,callback){
        connection(function(db){
            var collection = db.collection(tableName);
            collection.insertOne(rowInfo).then(function(result){
                callback(result);
                db.close();
            });
        });
    };

    this.insertAll = function(tableName,rowArr,callback){
        connection(function(db){
            var collection = db.collection(tableName);
            collection.insertMany(rowArr).then(function(result){
                callback(result);
            });
        });
    };

    this.modifyOne = function(tableName,tagJson,setJson,callback){
        connection(function(db){
            var collection = db.collection(tableName);
            collection.updateOne(tagJson,{
                $set : setJson
            },function(err,result){
                if(err){
                    callback(false);
                }else{
                    callback(result);
                }
            });
        });
    };

    this.modifyAll = function(tableName,tagJson,setJson,callback){
        connection(function(db){
            var collection = db.collection(tableName);
            collection.updateMany(tagJson,{
                $set : setJson
            },function(err,result){
                if(err){
                    callback(false);
                }else{
                    callback(result);
                }
            });
        });
    };

    this.removeOne = function(tableName,conJson,callback){
        connection(function(db){
            var collection = db.collection(tableName);
            collection.deleteOne(conJson,function(err,result){
                if(err){
                    callback(false);
                }else{
                    callback(result);
                }
            });
        });
    };

    this.removeAll = function(tableName,conJson,callback){
        connection(function(db){
            var collection = db.collection(tableName);
            collection.deleteMany(conJson,function(err,result){
                if(err){
                    callback(false);
                }else{
                    callback(result);
                }
            });
        });
    };
};

function connection(callback){
    if(!dbObj){   //避免多次打开数据库
        var dbConfig = Util.get('config.json','db');

        var host = dbConfig.host,
            port = dbConfig.port,
            dbName = dbConfig.db_name,
            user = dbConfig.user,
            password = dbConfig.password;

        MongoClient.connect("mongodb://"+host+":"+port+'/'+dbName,function(err,db){
            if(err){
                console.log('connection fail');
            }else{
                dbObj = db;
                callback(db);
            }
        });
    }else{
        callback(dbObj);
    }
}
