const os = require('os')
const path = require('path')
const fs = require('fs')
const http = require('http')

// module.exports = async function(nums) {
//     let list = []
//     let total = 0
//     for (let i = 0; i < nums.length; i++) {
//         list.push(Number(nums[i]))
//         total += list[i]
//     }
//     console.log(total);
// }

// module.exports = async (str) => {
//     console.log(str);
// }

// module.exports = async () => {
//     console.log('Sistema Operativo:', os.platform());
//     console.log('Arquitectura del Procesador:', os.arch());
//     console.log('Memoria Libre:', os.freemem());
// }

// module.exports = async () => {
//     const cpus = os.cpus();
//     const usagePerCore = cpus.map((core) => ({
//         model: core.model,
//         speed: core.speed,
//         times: core.times
//     }));

//     return {
//         totalCores: cpus.length,
//         usagePerCore
//     };
// }

// module.exports = async (url) => {
//     const buf = fs.readFileSync(url);
//     const str = buf.toString();
//     const num = str.split(/\r?\n/)
//     console.log(num.length - 1);
// }

// module.exports = async (url) => {
//     fs.readFile(url, 'utf-8', (err, buf) => {
//         if (err) console.error(err);
//         const str = buf.split(/\r?\n/);
//         console.log(str.length - 1);
//     })
// }

// module.exports = async (dir, ext) => {
//     fs.readdir(dir, (err, list) => {
//         if (err) console.error(err);
//         for (let i = 0; i < list.length; i++) {
//             if (path.extname(list[i]) === `.${ext}`) {
//                 console.log(list[i]);
//             }
//         }
//     })
// }

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

module.exports = async (url) => {
    http.get(url, (res)  => {
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(chunk);
        })
    }).on('error', (err) => {
        console.error(err);
    })
}

