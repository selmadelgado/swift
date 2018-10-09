// server/app.js
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const cors = require('cors')
const exphbs = require("express-handlebars")
const path = require('path')
const passport = require('passport')

const env = process.env.NODE_ENV || "development"
const _ = require('lodash')

app = express()

// to allow cross origin access for api calls
app.use(cors())

app.set('views', path.join(__dirname, 'views'));

// Handlebars
app.engine("handlebars", exphbs({
    defaultLayout: "main",
    layoutsDir:'app/views/layouts'
  })
)

app.set("view engine", "handlebars")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')))
app.use(require('express-session')({ secret: process.env.SECRET, resave: true, saveUninitialized: true }));

app.use(passport.initialize())
app.use(passport.session())

require("./routes/apiRoutes")(app)
require("./routes/staticRoutes")(app)

app.use(function (err, req, res, next) {
  console.log('An error occured', err)
  res.status(500).json({ error: 'critical error occured' })
})

module.exports = app
