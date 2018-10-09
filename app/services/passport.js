const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const models = require("../models")

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK,
  }, function (accessToken, refreshToken, user, cb) {

  console.log(user, 'user')

    const { Customers } = models

    Customers.findOne({
      where: { googleId: user.id },
      raw: true
    })
    .then((customer) => {
      if (customer) {
        return customer
      } else {
        return Customers.create({
          googleId: user.id,
          email: user.emails[0].value,
          name: user.displayName
        })
      }
    })
    .then(customer => {
      return cb(null, customer)
    })
    .catch(console.log)

  }))

passport.serializeUser(function (user, cb) {
  cb(null, user)
})

passport.deserializeUser(function (obj, cb) {
  cb(null, obj)
})

module.exports = passport