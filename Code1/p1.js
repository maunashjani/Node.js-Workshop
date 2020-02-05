const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Nice Class nice ppl\n');
});

server.listen(3000);

//https://bit.ly/37Ve7hR