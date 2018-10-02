var bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, DataTypes) {
  var Customer = sequelize.define("Customers", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [2, 10]
      }
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