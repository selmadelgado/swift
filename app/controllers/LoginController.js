const models = require("../models")
const passport = require("../services/passport")

class LoginController {
  constructor() {
    this.login = this.login.bind(this)
    this.authenticateLogin = this.authenticateLogin.bind(this)
  }

  login(req, res, next) {
    passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next)
  }

  authenticateLogin(req, res, next) {
    const redirects = { failureRedirect: '/authentication-failed', successRedirect: '/cart' }
    passport.authenticate('google', redirects)(req, res, next)
  }

  authenticationFailed(req, res, next) {
    res.render('loginFailed')
  }

  isLoggedIn(req, res, next) {
    if(req.user) {
      res.json({ loggedIn: true })
    } else {
      res.json({ loggedIn: false })
    }
  }

}

module.exports = new LoginController