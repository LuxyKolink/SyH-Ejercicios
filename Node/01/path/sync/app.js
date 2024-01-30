const fs = require('fs')
const path = require('path')

module.exports = (dir, ext) => {
    fs.readdir(dir, (err, list) => {
        if (err) console.error(err);
        for (let i = 0; i < list.length; i++) {
            if (path.extname(list[i]) === `.${ext}`) {
                console.log(list[i]);
            }
        }
    })
}