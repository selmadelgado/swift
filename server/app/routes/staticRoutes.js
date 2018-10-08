
var db = require("../models");

module.exports = function(app) {

  // Load index page
  app.get("/", function(req, res) {
    res.render("index")
  })

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
