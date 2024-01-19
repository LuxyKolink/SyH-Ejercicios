
// Primer ejercicio
const express = require('express')
const app = express()
const port = process.argv[2] || 3000

app.get('/home', (req, res) => {
    res.end('Hello World!')
})
app.listen(port, () => {
    console.log('Holi');
})


// const express = require('express')
// const path = require('path')
// const app = express()
// const port = process.argv[2] || 4000
// const dir = process.argv[3] || path.join(__dirname, 'public')

// app.use(express.static(dir))

// app.listen(port)