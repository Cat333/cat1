var http = require('http');
http.createServer(function (request,response) {

    response.writeHead(200,{'Content-Type':'text/plain'});

    response.end('Hello World\n');
}).listen(8080);

console.log('hello world\nÔËĞĞ');

/**
 * Created by µËË¼ç÷ on 2017/8/10.
 */
