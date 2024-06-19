const http = require('http');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    var q = url.parse(req.url, true).query;

    var txt = q.productid + ", " + q.category;
    res.end(txt);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});