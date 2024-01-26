const fs = require('fs');

// const dir = path.resolve(__dirname, 'temp.txt')
//const buf = fs.readFileSync(path.resolve(__dirname, 'temp.txt'))

const buf = fs.readFileSync(process.argv[2]);

const str = buf.toString()
// console.log(str);

//console.log(__filename);

//console.log(path.resolve(__dirname));

//console.log(fs.readFileSync(__filename, 'utf8'));
// const str = fs.readFileSync(dir, 'utf8')
const num = str.split(/\r?\n/)
// console.log(num);
console.log(num.length - 1);


// Solución oficial
/*
'use strict'
const fs = require('fs')

const contents = fs.readFileSync(process.argv[2])
const lines = contents.toString().split('\n').length - 1
console.log(lines)
*/