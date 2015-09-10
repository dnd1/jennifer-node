    var fs		    = require ('fs');
    var filename	= process.argv[2];

    var callback = function (err, data) {
        if (err) return console.error(err);
        var data = data.toString().split('\n');
        console.log(data.length-1);
    };
    fs.readFile(filename, callback);
