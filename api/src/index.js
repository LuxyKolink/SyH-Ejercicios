const http = require('node:http');
const bodyParser = require('./util/bodyParser')
const hostname = '127.0.0.1';
const port = 3000;

let database = []

function consultaAdminTareas(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(database))
}

async function crearAdminTareas(req, res) {
    try {
        await bodyParser(req);
        database.push(req.body)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(database))
        res.end()
    } catch (err) {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.write('Datos invalidos')
        res.end()
    }
    
}

const server = http.createServer((req, res) => {

    console.log(req.url, req.method);

    switch (req.method) {
        case "GET":
            if (req.url === "/") {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ "message": "Hola SyH!!" }))
            } else if (req.url === "/users") {
                consultaAdminTareas(req, res);
            }
        case "POST":
            if (req.url === "/user") {
                console.log(req.url, req.method);
                crearAdminTareas(req, res);
            }
            break;
        case "PUT":
            break;
        case "DELETE":
            break;
        default:
            break;
    }


});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});