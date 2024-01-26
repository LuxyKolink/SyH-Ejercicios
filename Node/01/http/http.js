const http = require('node:http')

const url = process.argv[2] || 'http://localhost:4000/home/'

http.get(url, (res) => {

    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(chunk);
    });
    res.on('end', () => {
        console.log('\nNo more data in response.');
    })
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
});

// // Create a local server to receive data from
// const server = http.createServer((req, res) => {
//   res.end(JSON.stringify({
//     data: 'Hello World!',
//   }));
// });

// server.listen(4000); 