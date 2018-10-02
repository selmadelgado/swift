// server/app.js
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const cors = require('cors')

const env = process.env.NODE_ENV || "development"
const _ = require('lodash')

app = express()

// to allow cross origin access
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(function (err, req, res, next) {
  console.log('An error occured', err)
})

module.exports = app
