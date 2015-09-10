	var filtroDir 	= require("./mymodule.js");
	var directorio	= process.argv[2];
	var ext 	= process.argv[3];
	var callback 	=  function (err, lista) {
				if (err) return console.error(err);
					for(i=0; i<=lista.length-1; i++){
					  result = (lista[i]);
						 console.log(result);
					}
			   };

	filtroDir(directorio,ext,callback);

