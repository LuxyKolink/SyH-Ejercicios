const path = require('path')
const readFile = require('./test')

const url = path.join(__dirname, 'text.txt')

// sync
readFile(url)

// async
// module()