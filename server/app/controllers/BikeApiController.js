const models = require("../models")

class BikeApiController {
  fetchLayers(req, res, next) {
    const { Bikes, Layers } = models

    let response = {}

    Bikes.findOne({
      where: { id: 1 }
    })
    .then((bike) => {
      response.bikeId = bike.id
      response.basePrice = bike.price

      return Layers.findAll({
        where: {
          bikeId: bike.id
        },
        attributes: ['id', 'part', 'imageSrc', 'colorCode', 'additionalPrice']
      })
    })
    .then((layers) => {
      let sortedLayerByPart = {}
      layers.forEach(function(layer){
        if (typeof sortedLayerByPart[layer['part']] == 'undefined') {
          sortedLayerByPart[layer['part']] = []
        }
        sortedLayerByPart[layer['part']].push(layer)
      })

      response.layers = sortedLayerByPart
      res.json(response)
    })
    .catch((e) => {
      next(e)
    })
  }
}

module.exports = new BikeApiController