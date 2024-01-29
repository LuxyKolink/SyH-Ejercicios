const express = require('express')
require('dotenv/config')

const connectDB = require('./database/mysql.db')
const logger = require('./middleware/middleware')
const route = require('./router/route')
const app = express()
const port = 3000

app.use(express.json())
app.use(logger)

app.use('/user', route);

connectDB.connect(() => {
  console.log('Connected to mysql!');
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})

// connectDB().then(() => {
//   console.log('Connected  to mysql!');
// })