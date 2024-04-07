
const Gun = require('gun');
const http = require('http');

const server = http.createServer((req, res) => {
    if (Gun.serve(req, res)) return; // Sirve los archivos de Gun
    res.writeHead(200);
    res.end('Servidor Relay Gun.js');
});

const gun = Gun({
    web: server
});

server.listen(8765, () => {
    console.log('Servidor Gun.js escuchando en el puerto 8765');
});
