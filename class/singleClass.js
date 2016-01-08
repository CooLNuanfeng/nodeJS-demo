var _instance = null;

function Single(name){
	this.name = name;
}

Single.prototype = {
	constructor : Single,
	show : function(){
		console.log(this.name);
	}
};


module.exports = function(name){
	if(!_instance){
		return _instance = new Single(name);
	}else{
		return _instance;
	}
};