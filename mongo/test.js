var BaseMongoDB = require('./BaseMongoDB'),
    baseMongoDB = new BaseMongoDB(),
    tableName = "kittens";

//插入单个
// var rowInfo = {};
// rowInfo.name = "david";
// rowInfo.age = 23;
// rowInfo.color = "blue";
// baseMongoDB.insertOne(tableName,rowInfo,function(res){
//     console.log(res.ops);
// });

//插入一组
// var rowArr = [
//     {"name":"blue","age":26,"color":"red"},
//     {"name":"jack","age":27,"color":"green"},
//     {"name":"shylie","age":25,"color":"orange"}
// ];
// baseMongoDB.insertAll(tableName,rowArr,function(res){
//     console.log(res);
// });


//修改单个
// baseMongoDB.modifyOne(tableName,{"name":"Fluffy"},{"age":25},function(res){
//     console.log(res);
// });

//修改多个
// baseMongoDB.modifyAll(tableName,{"name":"blue"},{"name":"Slience","color":"blue","age":26},function(res){
//     console.log(res);
// });

//查找所有
// baseMongoDB.findAll(tableName,function(result){
//     var resultArr = [];
//     resultArr.push(result);
//     console.log(resultArr);
// });

//条件查找
// baseMongoDB.findByCondition(tableName,{"age":{$lt:27}},function(result){
//     var resultArr = [];
//     resultArr.push(result);
//     console.log(resultArr);
// });

//删除单个
// baseMongoDB.removeOne(tableName,{"name":"Slience"},function(result){
//     console.log(result);
// });

//删除多个
// baseMongoDB.removeAll(tableName,{"name":"david"},function(result){
//     console.log(result);
// });
