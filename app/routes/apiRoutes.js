const { fetchLayers } = require('../controllers/BikeApiController')
const { isLoggedIn } = require('../controllers/LoginController')

module.exports = function(app) {

  // fetch list of layers with all information required for customiser
  app.get("/fetchLayers", fetchLayers)

  app.get("/isLoggedIn", isLoggedIn)

}
