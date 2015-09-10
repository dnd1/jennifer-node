    var net = require('net');
    var puerto = process.argv[2];

    function now(d){
       function pad(n){
          return (n<10 ? '0'+n : n) ;
       }
        var d = new Date();
        return d.getFullYear()+'-'
        + pad(d.getMonth()+1)+'-'
        + pad(d.getDate())+' '
        + pad(d.getHours())+':'
        + pad(d.getMinutes())
    }

    var server = net.createServer(function (socket) {
      socket.end(now() + '\n');
    });

    server.listen(Number(puerto));

