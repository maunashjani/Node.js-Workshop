const http = require('http');
var url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    /*Use the url module to turn the querystring into an object:*/
    var q = url.parse(req.url, true).query;

    /*Return the productid and category from the query object:*/
    var txt = q.productid + ", " + q.category;
    res.end(txt);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});