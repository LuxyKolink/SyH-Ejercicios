const fs = require('fs')

module.exports = (url) => {
    const buf = fs.readFileSync(url);
    console.log(buf);
    const str = buf.toString();
    console.log(str);
    const num = str.split('\r\n')
    console.log(num);
    console.log(num.length - 1);
}

// module.exports = async (url) => {
//     fs.readFile(url, 'utf-8', (err, buf) => {
//         if (err) console.error(err);
//         const str = buf.split(/\r?\n/);
//         console.log(str.length - 1);
//     })
// }
