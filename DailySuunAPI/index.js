const express = require('express')
const config = require('./config')
const weather = require('./routes/weather')
const error = require('./utils/error')
const cors = require('cors')
const { join } = require('path')
const app = express()
app.use(cors())
app.use('/static', express.static(join(__dirname, 'public')))
weather(app)
app.use(error)
app.listen(config.api.port, () => {
    console.log('Server listen on port ', config.api.port)
})
