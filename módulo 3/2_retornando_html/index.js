const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Contenty-Type', 'text/html');
    res.end('<h1>Meu primeiro server com Html! cade o encode é</h1>')
});

server.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})