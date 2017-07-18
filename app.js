var http = require('http');
var User = require('./user');

var oleg = new User("Oleg", 24);
oleg.sayHi();


http.createServer(function(request, response) {

    response.end('Hello NodeJS');

}).listen(3000, "127.0.0.1", function() {
    console.log('Server listen port 3000');
});