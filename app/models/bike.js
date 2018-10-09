module.exports = function (sequelize, DataTypes) {
  var Bike = sequelize.define('Bikes', {
    modelName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })

  Bike.associate = function (models) {
    Bike.hasMany(models.Layers, {
      targetKey: 'id',
      foreignKey: 'bikeId',
      onUpdate: 'cascade',
      onDelete: 'cascade'
    })
  }

  return Bike
}