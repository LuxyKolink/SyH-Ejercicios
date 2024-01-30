const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, (err, list) => {
        if (err) {
            return callback(err);
        } 

        let result = []
        for (let i = 0; i < list.length; i++) {
            if (path.extname(list[i]) === `.${ext}`) {
                result.push(list[i])
            }
        }
        callback(null, /*result*/ result.join('\n'))
    })
}
