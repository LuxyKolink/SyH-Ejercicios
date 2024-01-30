const http = require('node:http');
const hostname = '127.0.0.1';
const port = [3000, 4000, 5000];

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hi mom');
});
server.listen(port[0], hostname, () => {
    console.log(`Server running at http://${hostname}:${port[0]}/`);
});

// const server2 = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('I love you');
// });
// server2.listen(port[1], hostname, () => {
//     console.log(`Server running at http://${hostname}:${port[1]}/`);
// });

// const server3 = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('<3');
// });
// server3.listen(port[2], hostname, () => {
//     console.log(`Server running at http://${hostname}:${port[2]}/`);
// });