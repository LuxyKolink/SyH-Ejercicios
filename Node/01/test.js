const modules = require('./module')
const path = require('path')
const http = require('node:http')
// modules(process.argv.slice(2))

// const dir = path.join(__dirname)
// const ext = 'js'

// modules(dir, ext, (err, res) => {
//     if (err) console.error(err);
//     console.log(res);
// });

// const srt = process.argv.slice(2)

// let emptyList = ''

// for (let i = 0; i < srt.length; i++) {
//     emptyList += srt[i] + ' ';
    
// }

// modules(emptyList);

const url = 'http://localhost:4000/'

modules(url)


const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  });

server.listen(4000, () => {
    console.log('Connected to port 4000');
});
