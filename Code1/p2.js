const http = require('http');
const custom = require("./ourMod")

const server = http.createServer((req, res) => {
  res.end('Date is '+ custom.ourMod);
});

server.listen(3000);