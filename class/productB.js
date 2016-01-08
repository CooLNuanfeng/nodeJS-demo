function ProductB(){
	this.name = 'ProductB';
}

ProductB.prototype.getProduct = function(){
	console.log(this.name + ' is coming');
};

module.exports = ProductB;