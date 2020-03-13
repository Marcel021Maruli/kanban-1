require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 4000
const index = require('./routes/index')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/', index)


app.listen(PORT, console.log("listening on port " + PORT))

module.exports = app