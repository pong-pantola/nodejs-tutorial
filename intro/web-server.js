let http = require('http');

http.createServer(function (req, res) {
  res.end("Hello World!")
}).listen(8080)

console.log(`Listening at port 8080`)