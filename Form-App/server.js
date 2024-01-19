const express = require('express')

const logger = require('./middleware/middleware')
const birds = require('./router/route')
const app = express()
const port = 3000

app.use(express.json())
app.use(logger)

app.use('/birds', birds)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})