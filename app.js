// const { log } = require('console');
// var http = require('http');
// http.createServer(function(request, response){
//   response.writeHead(200, {"Content-Type": "text/html"});
//   response.write('<h1>hi!!!</h1>');
//   response.end();
// }).listen(8080);

const { log } = require('console');
var path = require('path');
console.log(path.dirname('/zz/xx/yy.js'));

console.log(path.join(__dirname, '/zz'));
console.log(path.basename('/zz/xx/yy.js'));
console.log(path.extname('/zz/xx/yy.js'));
console.log(path.parse('/zz/xx/yy.js'));
console.log('125 3');