const { login, authenticateLogin, authenticationFailed } = require('../controllers/LoginController')
const registered = require('connect-ensure-login').ensureLoggedIn()
const guest = require('connect-ensure-login').ensureLoggedOut()

module.exports = function(app) {

  // Load index page
  app.get("/", function(req, res) {
    res.render("index")
  })

  // Load cart page
  app.get("/cart", function(req, res) {
    res.render("cart")
  })

  app.get("/authentication-failed", guest, authenticationFailed)

  // Login to the page
  app.get("/login-signup", login)

  // Login to the page
  app.get("/auth/google/callback", authenticateLogin)

  // Load success page after payment
  app.get("/paysuccess", function(req, res) {
    res.render("paysuccess");
  });

  // Load success page after payment
  app.get("/customiser", function(req, res) {
    res.render("customiser");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
