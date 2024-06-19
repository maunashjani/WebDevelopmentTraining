const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello World</h1><br><ul><li>Apple</li><li>Microsoft</li></ul>');
  res.end('This is node.js code');
});


server.listen(3000);