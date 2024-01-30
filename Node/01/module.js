const os = require('os')
const path = require('path')
const fs = require('fs')
const http = require('http')

// module.exports = async (dir, ext, callback) => {
//     fs.readdir(dir, (err, list) => {
//         if (err) {
//             return callback(err)
//         }
//         let res = []
//         for (let i = 0; i < list.length; i++) {
//             if (path.extname(list[i]) === `.${ext}`) {
//                 res.push(list[i])
//             }
//         }
//         return callback(null, res);
//     })
// }

// module.exports = async (url) => {
//     http.get(url, (res)  => {
//         res.setEncoding('utf8');
//         res.on('data', (chunk) => {
//             console.log(chunk);
//         })
//     }).on('error', (err) => {
//         console.error(err);
//     })
// }

