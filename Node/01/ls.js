const fs = require('fs');
const path = require('path');

const dir = process.argv[2] || 'F:/Cursos/Node/01'

fs.readdir(dir, (err, list) => {
    if (err) {
        return console.error(err);
    } 
    const ext = process.argv[3] || 'js'

    // console.log(`\Filenames with the .${ext} extension:`);
    // let extList = []
    for (let i = 0; i < list.length; i++) {
        if (path.extname(list[i]) === `.${ext}`) {
            // extList.push(path.extname(list[i]))
            // console.log(path.extname(list[i]));
            console.log(list[i]);
        }
    }
    
    // console.log(extList);
})

// Solución oficial

/*
'use strict'
    const fs = require('fs')
    const path = require('path')

    const folder = process.argv[2]
    const ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })
*/