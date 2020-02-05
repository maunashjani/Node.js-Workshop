var http = require('http') 
var fs = require('fs') 
var server = http.createServer((req, res) => {   
    res.writeHead(200, {'Content-Type': 'text/plain'});   
    fs.readFile('./x.txt', (err, file) => {     
        res.end(file);     
    }) 
}) 
server.listen(3000)