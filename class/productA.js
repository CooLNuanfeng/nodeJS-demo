function ProductA(){
	this.name = 'ProductA';
}

ProductA.prototype.getProduct = function(){
	console.log(this.name + ' is coming');
};

module.exports = ProductA;