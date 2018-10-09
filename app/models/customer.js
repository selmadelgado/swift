var bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, DataTypes) {
  var Customer = sequelize.define("Customers", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  });

  // User.associate = function (models) {
  //   User.hasMany(models.Order, {
  //     foreignKey: 'customerId'
  //   });
  // };

  Customer.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  Customer.hook("beforeCreate", function(customer) {
    customer.password = bcrypt.hashSync(customer.password, bcrypt.genSaltSync(10), null);
  });

  return Customer;
};