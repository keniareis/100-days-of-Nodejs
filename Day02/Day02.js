//importa o modulo http
const http = require('http');

const server = http.createServer((req, resp) => {
    resp.writeHead(200, {'content-type': 'text/plain'});

    resp.end('Servidorzinho!!');
});

server.listen(3000, () => {
    console.log('Servidor rodando');
});