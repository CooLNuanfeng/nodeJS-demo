function Observer(){
	this.observer = {};
}

Observer.prototype = {
	add : function(key,obj){
		this.observer[key] = obj;
	},
	remove : function(key){
		if(this.observer[key]){
			delete this.observer[key];
		}
	},
	doAction : function(){
		this.notifyAll();
	},
	notifyAll : function(){
		for(var key in this.observer){
			this.observer[key].update();
		}
	}
};

module.exports = new Observer;