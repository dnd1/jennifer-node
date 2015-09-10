	var fs 		= require("fs");
	var directorio	= process.argv[2];
	var path	= require('path');
	fs.readdir(directorio, function( err, lista){
		 if(err) return console.error(err);
		 ext = path.extname(lista);
		for (var i = 0; i < ext.length; i++){
			result = (lista[i]);
				if(i<3){
				   console.log(result);
				}
		}


	});

