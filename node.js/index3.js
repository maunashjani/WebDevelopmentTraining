const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  fs.readFile("./demo.html", (err, file) => {
    res.end(file);
  });
});

server.listen(3000);
