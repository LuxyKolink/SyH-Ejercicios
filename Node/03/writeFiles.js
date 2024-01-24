const fs = require('fs')
const fsPromises = require('fs/promises')
const path = require('path')

const f = () => {
  fs.writeFile(path.join(__dirname, 'data', 'reply.txt'), 'Holaa', (err, data) => {
    if (err) {
      return console.error(err);
    }
    console.log('Escritura completa');
  
    fs.appendFile(path.join(__dirname, 'data', 'reply.txt'), 'Quee pasó', (err, data) => {
      if (err) {
        return console.error(err);
      }
      console.log('Append completa');
      fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
        if (err) {
          return console.error(err);
        }
        console.log(JSON.parse(data));
      })
    })
  
  })
  
  console.log('Holaa');
}

const url = path.join(__dirname, 'data', 'reply.txt');
const newUrl = path.join(__dirname, 'data', 'promiseReply.txt');

const fx = async (url, newUrl) => {
  try {
    const data = await fsPromises.readFile(url, 'utf8');
    console.log(data);
    // await fsPromises.unlink(url);
    await fsPromises.writeFile(newUrl, data);
    await fsPromises.appendFile(newUrl, '\n\nNo nada.');
    await fsPromises.rename(newUrl, path.join(__dirname, 'data', 'promiseComplete.txt'));
    const newData = await fsPromises.readFile(newUrl, 'utf8');
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
}

// f()
fx(url, newUrl);

