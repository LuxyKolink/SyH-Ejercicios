const http = require('http')

// console.log('Start');

// setImmediate(() => {
// 	console.log('Immediate callback');
// });

// console.log('End');

const port = 3000

http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello World</h1>')
}).listen(port, () => {
    console.log(`Conected to port ${port}`);
})