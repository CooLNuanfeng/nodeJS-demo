
function Person(){
	this.name = 'person';
}

Person.prototype.eat = function(){
	console.log('eat food');
};

Person.prototype.sleep = function(){
	console.log('sleep in the night');
};

/*Person.prototype = {
	eat : function(){
		console.log('eat foot');
	},
	sleep : function(){
		console.log('sleep in the night');
	}
};
*/
module.exports = Person;