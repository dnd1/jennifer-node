    var http    = require('http');
    var url     = require('url');
    var puerto = process.argv[2];

    function isotime(time){
       return{
            hour: time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds(),
        }
    }

    function unixTime(time){
        return{
            unixtime: time.getTime(),
        }
    }

    http.createServer(function (req, res) {

        var parts = url.parse(req.url, true);
        var time = new Date(parts.query.iso);
        var result;

        if (parts.pathname == '/api/parsetime') result = isotime(time);
        else if (parts.pathname == '/api/unixtime') result = unixTime(time);

        if (result){
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(result));
        }
    }).listen(Number(puerto));