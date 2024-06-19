const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  var q = url.parse(req.url, true).query;

  var txt = q.id == 1 ? "Macbook Air" : "Not found";

  res.end(txt);
});

server.listen(3000);
