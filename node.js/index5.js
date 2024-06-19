const http = require('http');
const userdata = require('./userdata');

const server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("First Name is: " + userdata.firstname);
    res.write("<br>Last Name is: " + userdata.lastname);
    res.write("<br>Full Name is: " + userdata.getFullName());
    res.end();
})
server.listen(3000);