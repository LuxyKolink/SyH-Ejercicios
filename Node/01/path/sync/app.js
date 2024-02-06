
const fs = require('fs')
const path = require('path')

module.exports = (fileDir, fileExt) => {
    fs.readdir(fileDir, (err, listOfFiles) => {
        if (err) console.error(err);
        for (let i = 0; i < listOfFiles.length; i++) {
            if (path.extname(listOfFiles[i]) === `.${fileExt}`) {
                console.log(listOfFiles[i]);
            }
        }
    })
}

