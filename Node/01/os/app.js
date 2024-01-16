const os = require('os')

function getOs() {
    console.log(os.platform());
}

function hello() {
    console.log('HELLO WORLD');
}

module.exports = { hello }

