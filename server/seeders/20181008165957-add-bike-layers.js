'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    await queryInterface.bulkInsert('Bikes', [
      {
        id: 1,
        modelName: 'Customisable',
        price: 390,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {})

    const wheels = [
      {
        part: 'wheel',
        additionalPrice: 10,
        imageSrc: '/bikes/Bike-Layers_0000s_0000_Wheels-Orange.png',
        colorCode: '#D4833E',
      },{
        part: 'wheel',
        additionalPrice: 0,
        imageSrc: '/bikes/Bike-Layers_0000s_0001_Wheels-Blue.png',
        colorCode: '#4664BD',
      },{
        part: 'wheel',
        additionalPrice: 5,
        imageSrc: '/bikes/Bike-Layers_0000s_0002_Wheels-Purple.png',
        colorCode: '#B362B1',
      }
    ]

    const handlebars = [
      {
        part: 'handlebar',
        additionalPrice: 0,
        imageSrc: '/bikes/Bike-Layers_0000s_0003_Bars-Pink.png',
        colorCode: '#E0A6C2',
      },{
        part: 'handlebar',
        additionalPrice: 15,
        imageSrc: '/bikes/Bike-Layers_0000s_0004_Bars-Blue.png',
        colorCode: '#6C98C8',
      },{
        part: 'handlebar',
        additionalPrice: 20,
        imageSrc: '/bikes/Bike-Layers_0000s_0005_Bars-Green.png',
        colorCode: '#758F3A',
      },{
        part: 'handlebar',
        additionalPrice: 24,
        imageSrc: '/bikes/Bike-Layers_0000s_0006_Bars-Yellow.png',
        colorCode: '#EAD34D',
      },{
        part: 'handlebar',
        additionalPrice: 12,
        imageSrc: '/bikes/Bike-Layers_0000s_0007_Bars-Lime.png',
        colorCode: '#CBDABC',
      }
    ]

    const body = [
      {
        part: 'body',
        additionalPrice: 0,
        imageSrc: '/bikes/Bike-Layers_0000s_0008_Body-Pink.png',
        colorCode: '#D169BA',
      },{
        part: 'body',
        additionalPrice: 15,
        imageSrc: '/bikes/Bike-Layers_0000s_0009_Body-Teal.png',
        colorCode: '#AFF6F3',
      },{
        part: 'body',
        additionalPrice: 20,
        imageSrc: '/bikes/Bike-Layers_0000s_0010_Body-Blue.png',
        colorCode: '#CCEBF4',
      },{
        part: 'body',
        additionalPrice: 10,
        imageSrc: '/bikes/Bike-Layers_0000s_0011_Body-Purple.png',
        colorCode: '#B3ACE7',
      }
    ]

    let layers = body.concat(wheels, handlebars).map(function(layer) {
      layer.createdAt = new Date()
      layer.updatedAt = new Date()
      layer.bikeId = 1

      return layer
    })

    return queryInterface.bulkInsert('Layers', layers, {})

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Bikes', null, {});
  }
};
