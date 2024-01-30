const app = require('./app')

const dir = process.argv[2] || 'F:/Cursos/Node/01'
const ext = process.argv[3] || 'js'

app(dir, ext)