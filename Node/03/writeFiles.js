const fs = require('fs')
const fsPromises = require('fs/promises')
const path = require('path')

const f = () => {
  fs.writeFile(path.join(__dirname, 'reply.txt'), 'Holaa', (err, data) => {
    if (err) {
      return console.error(err);
    }
    console.log('Escritura completa');
  
    fs.appendFile(path.join(__dirname, 'reply.txt'), 'Quee pasó', (err, data) => {
      if (err) {
        return console.error(err);
      }
      console.log('Append completa');
      fs.readFile(path.join(__dirname, 'data.json'), 'utf-8', (err, data) => {
        if (err) {
          return console.error(err);
        }
        console.log(JSON.parse(data));
      })
    })
  
  })
  
  console.log('Holaa');
}

const fx = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, 'data.json'), 'utf8')
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

f()
fx()

