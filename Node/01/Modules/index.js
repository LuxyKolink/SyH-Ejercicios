const app = require('./app')

const dir = process.argv[2] || 'F:/Cursos/Node/01'
const ext = process.argv[3] || 'js'

app(dir, ext, (err, res) => {
    if (err) {
        console.error(err);
    }
    for (let i in res) {
        console.log(res[i]);
    }
})