const http = require('node:http')

const url = process.argv[2] || 'http://localhost:3000/birds/'

http.get(url, (res) => {
    res.setEncoding('utf-8');
    let rawData = ''
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        const data = rawData
        console.log(data.length);
        console.log(data);
    })
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
})