var util = require('util');
var Person = require('./person');

function Student(){
	Person.call(this);
}

util.inherits(Student, Person);

Student.prototype.eat = function(){
	console.log('I am eating');
};

Student.prototype.study = function () {
	console.log('I am learning');
};

// 注意下面的写法无法继承 person中的方法，相当于把 Student.prototype重新赋值了个新的json对象
/*Student.prototype = {
	eat : function(){
		console.log('I am eating');
	},
	study : function(){
		console.log('I am learning');
	}
};*/

module.exports = Student;

//exports = new Student; //直接以对象形式导出，子模块不需要new实例，实现静态类