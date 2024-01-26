const fs = require('fs')
const path = require('path')

const lorem = path.join(__dirname, 'data', 'lorem.txt');
const newLorem = path.join(__dirname, 'data', 'newLorem.txt');

const rs = fs.createReadStream(lorem, {encoding: 'utf8'});

const ws = fs.createWriteStream(newLorem);

// rs.on('data', (chunk) => {
//     ws.write(chunk)
// })

rs.pipe(ws);

