function WatchTwo(){
	this.name = 'WatchTwo';
}

WatchTwo.prototype = { 
	update : function(){
		console.log(this.name);
	}
};

module.exports = new WatchTwo;