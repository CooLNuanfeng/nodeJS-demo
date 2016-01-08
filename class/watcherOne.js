function WatchOne(){
	this.name = 'WatchOne';
}

WatchOne.prototype = { 
	update : function(){
		console.log(this.name);
	}
};

module.exports = new WatchOne;