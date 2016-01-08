function Interface(name,methods){
	if(arguments.length!=2){
		throw new Error('Interface 接口必须有两个参数，第一个为接口名 string类型，第二个为要实现的方法名 array 类型');
	}
	this.name = name;
	this.methods = [];
	for(var i=0;i<methods.length;i++){
		if(typeof methods[i] != 'string'){
			throw new Error('要实现的方法名位字符串类型');
		}
		this.methods.push(methods[i]);
	}
}

Interface.prototype.mustFn = function(obj) {
	if(arguments.length<2){
		throw new Error('参数不正确，至少两个参数');
	}
	for(var i=1,len = arguments.length; i<len;i++){
		var interface = arguments[i];
		if(interface.constructor != Interface){
			throw new Error('mustFn的参数需要两个或以上的Interface的实例对象');
		}
		//循环实现每个接口里的方法
		for(var j=0,mLen = interface.methods.length;j<mLen;j++){
			var method = interface.methods[j];
			if(!obj[method]||typeof obj[method] !== 'function'){
				throw new Error(obj.constructor+'的'+method+'方法没有实现');
			}
		}
	}
};


module.exports = Interface;




