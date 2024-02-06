const os = require('os')
const path = require('path')
const fs = require('fs')


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

const http = require('http')

module.exports = (serverUrl) => {
    http.get(serverUrl, (nodeResponse) => {
        nodeResponse.setEncoding('utf-8');
        nodeResponse.on('data', (chunk) => {
            console.log(chunk);
        })
    }).on('error', (err) => {
        console.error(err);
    })
}




