const express = require('express')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()
const index = require('./routes/index')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/',index)

app.listen(3000,()=> console.log('Server Up '))