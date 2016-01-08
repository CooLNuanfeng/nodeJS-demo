var Person = require('./person');
var Teacher = require('./teacher');
var Student = require('./student');
var Coder = require('./coder');

//在子类中修改父类的方法并不影响父类
/*Student.prototype.eat = function(){
	console.log('I am eating');
};*/

var personObj = new Person();
var studentObj = new Student();
var teacherObj = new Teacher();
var coderObj = new Coder();



studentObj.eat();
personObj.eat();

studentObj.sleep();

studentObj.study();
