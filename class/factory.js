var ProductA = require('./productA');
var ProductB = require('./productB');

exports.creatProduct = function(type){
	var product = null;
	switch(type){
		case 'A':
			product = new ProductA;
			break;
		case 'B':
			product = new ProductB;
			break;
	}

	return product.getProduct();
};