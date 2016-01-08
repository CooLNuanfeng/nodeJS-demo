//单体模式
var Single = require('./singleClass');

var singleObj1 = new Single('blue');
singleObj1.show();

var singleObj2 = new Single('leo');
singleObj2.show();

//工厂模式 可批量生产某类对象
var factory = require('./factory');

factory.creatProduct('A');
factory.creatProduct('B');


//接口模式
var Interface = require('./interface');
var USB = new Interface('USB',['read','write']);
var Play = new Interface('Play',['play']);

function MP3(){

}
MP3.prototype.read = function() {
	console.log('MP3 is reading');
};
MP3.prototype.write = function() {
	console.log('MP3 is writing');
};
MP3.prototype.play = function(){
	console.log('MP3 is playing');
};

function Ipod(){

}
Ipod.prototype.read = function() {
	console.log('Ipod is reading');
};
Ipod.prototype.write = function() {
	console.log('Ipod is writing');
};
Ipod.prototype.play = function(){
	console.log('Ipod is playing');
};

function Ibook(){

}
Ibook.prototype.read = function() {
	console.log('Ibook is reading');
};
Ibook.prototype.write = function() {
	console.log('Ibook is writing');
};
Ibook.prototype.play = function(){
	console.log('Ibook is playing');
};


function USBmanger(){
	this.devices = [];
}
USBmanger.prototype.add = function(device) {
	//实现USB 和 Play 两个接口
	Interface.prototype.mustFn(device,USB,Play);
	this.devices.push(device);
};

var mp3 = new MP3();
var ipod = new Ipod();
var ibook = new Ibook();

var usbManger = new USBmanger();

usbManger.add(mp3);
usbManger.add(ipod);
usbManger.add(ibook);

console.log('所有接口都已实现');

mp3.play();


//观察者模式
//它定义了一种一对多的关系，让多个观察者对象同时监听某一主题对象，这个主题对象发生变化就会通知所有的观察者对象，让他们更新自己
var watcher1 = require('./watcherOne');
var watcher2 = require('./watcherTwo');//引入两个被观察者
var observer = require('./observer');//观察对象

observer.add('watcher1',watcher1);
observer.add('watcher2',watcher2); //添加观察对象，建立联系

//observer.remove('watcher2');	//删除一个被观察者

observer.doAction(); //执行观察命令，查看结果



//适配器模式，个人觉得就是对继承的类中某些方法进行重写，只是重写时，引入外部要求的或提供的接口
//装饰者模式，个人觉得就是对继承的类进行某些方法的补充，完善。