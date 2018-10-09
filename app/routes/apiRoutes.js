const { fetchLayers } = require('../controllers/BikeApiController')

module.exports = function(app) {

  // fetch list of layers with all information required for customiser
  app.get("/fetchLayers", fetchLayers)

}
