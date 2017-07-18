var http = require('http');
var os = require('os');
var greeting = require('./greeting');


var userName = os.userInfo().username;

console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));


http.createServer(function(request, response) {

    response.end('Hello NodeJS');

}).listen(3000, "127.0.0.1", function() {
    console.log('Server listen port 3000');
});