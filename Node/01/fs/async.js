// const fs = require('fs');

// const buf = fs.readFile(process.argv[2], 'utf-8', (err, buf) => {
//     if (err) throw err;
//     const str = buf.toString().split(/\r?\n/)
//     console.log(str.length - 1);
// })

// Correción

const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (err, buf) => {
    if (err) throw err;
    const str = buf.toString().split(/\r?\n/)
    console.log(str.length - 1);
})

// Solución oficial

/*
const fs = require('fs')
    const file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      if (err) {
        return console.log(err)
      }
      // fs.readFile(file, 'utf8', callback) también se puede utilizar
      const lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })
*/