	var fs		= require('fs');
	var http	= require('http');
	var url		= process.argv[2];
	var archivo	= process.argv[3];


	var server = http.createServer(function (req, res) {
			 res.writeHead(200, { 'content-type': 'text/plain' });
			 fs.createReadStream(archivo).pipe(res);
	});
	server.listen(Number(url));
