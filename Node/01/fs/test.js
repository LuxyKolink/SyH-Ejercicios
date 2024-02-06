
const fs = require('fs')

module.exports = (fileDir) => {
    const buffer = fs.readFileSync(fileDir);
    const bufferToStringsArray = buffer.toString();
    const ArraySeparatedByLineBreaks = bufferToStringsArray.split('\r\n')
    console.log(ArraySeparatedByLineBreaks.length - 1);
}

// module.exports = async (url) => {
//     fs.readFile(url, 'utf-8', (err, buf) => {
//         if (err) console.error(err);
//         const str = buf.split(/\r?\n/);
//         console.log(str.length - 1);
//     })
// }
