module.exports = function (sequelize, DataTypes) {
  var Layer = sequelize.define('Layers', {
    part: {
      type: DataTypes.ENUM('wheel', 'body', 'handlebar'),
      allowNull: false,
    },
    additionalPrice: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    imageSrc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    colorCode: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Layer.associate = function (models) {
    Layer.belongsTo(models.Bikes, {
      foreignKey: 'bikeId',
      targetKey: 'id',
      allowNull: false,
      onUpdate: 'cascade',
      onDelete: 'cascade'
    })
  }

  return Layer
}