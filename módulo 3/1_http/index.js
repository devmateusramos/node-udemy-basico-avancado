const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.write('Oi http');
    res.end();
});

server.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})