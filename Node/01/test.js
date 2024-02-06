const modules = require('./module')
const path = require('path')
const http = require('node:http')
const fs = require('fs')
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

// const url = 'http://localhost:4000/'

// modules(url)


// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
//   });

// server.listen(4000, () => {
//     console.log('Connected to port 4000');
// });

// const str = process.argv.slice(2)
// let newStr = ''

// for (let i = 0; i < str.length; i++) {
//     newStr += str[i] + ' '
// }
// console.log(newStr);

// const dir = process.argv[2] || 'F:/Cursos/Node/01'
// const ext = process.argv[3] || 'js'

// fs.readdir(dir, (err, list) => {
//     if (err) console.error(err);
//     for (let i = 0; i < list.length; i++) {
//         if (path.extname(list[i]) === `.${ext}`){
//             console.log(list[i]);
//         }
        
//     }
// })

const serverUrl = process.argv[2] || 'http://localhost:3000/'

http.get(serverUrl, (nodeResponse) => {
    nodeResponse.setEncoding('utf-8');
    nodeResponse.on('data', (chunk) => {
        console.log(chunk);
    })
}).on('error', (err) => {
    console.error(err);
})

