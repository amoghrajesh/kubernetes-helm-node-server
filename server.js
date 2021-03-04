var http = require('http');
const url = require('url');
const querystring = require('querystring');

var server = http.createServer(function (req, res){
   if(req.url == '/hello'){
       res.writeHead(200, {'ContentType':'text/html'});
       res.write('<html><body><h1> Hello Amogh </h1></body></html>');
       res.end();
   }
   else if(req.url == '/'){
        res.writeHead(200, {'ContentType':'text/html'});
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    }
});

server.listen(2000);
console.log('Node.js server is running on port 2000...');