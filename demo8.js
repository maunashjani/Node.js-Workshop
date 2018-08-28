var http = require('http');
var userdata = require('./demomodule2');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("First Name is: " + userdata.firstname);
    res.write("\nLast Name is: " + userdata.lastname);
    res.write("\nFull Name is: " + userdata.getFullName());
    res.end();
})
server.listen(3000);
