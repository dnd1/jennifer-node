var fs 		= require("fs");
var path	= require('path');

var filtroDir = function(directorio,ext,callback) {
  	fs.readdir(directorio,function(err,data){
		if (err) return callback(err);
			var result=[];
			for(i=0; i<=data.length; i++){
			    var	extdata = path.extname(data[i]);
				if (extdata == "."+ext){
					result.push(data[i]);
				}
			}
		callback(err,result);
	});

};
module.exports = filtroDir;
