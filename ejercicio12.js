    var http = require('http');
    var map = require('through2-map');
    var puerto = process.argv[2];

     http.createServer(function (request, response) {
        if (request.method != 'POST')
             return response.end();
            request.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase()
            })).pipe(response);
    }).listen(Number(puerto));

