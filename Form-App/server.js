const express = require('express')
const connectDB = require('./database/mysql.db')
const mysql = require('mysql2');

require('dotenv/config')

const logger = require('./middleware/middleware')
const birds = require('./router/route')
const app = express()
const port = 3000

app.use(express.json())
app.use(logger)

app.use('/birds', birds)

connectDB(() => {
  console.log('Not working');
})
// connectDB(() => {
//   console.log('Connected to mysql database!');
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})