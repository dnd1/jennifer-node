var fs		= require ('fs');
var filename	= process.argv[2];
var temp 	= fs.readFileSync(filename, "utf8").toString().split('\n');
console.log(temp.length -1);
