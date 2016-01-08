var goDns = require('./goDns');
var goIndex = require('./goIndex');

exports.router = function(req,res,pathname){
	switch(pathname){
		case '/parse':
			goDns.goDns(req,res);
			break;
		default:
			goIndex.goIndex(req,res);
			break;
	}
}; 