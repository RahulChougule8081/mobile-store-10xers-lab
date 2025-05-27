const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./TempUser');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.TEXT,
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Product.belongsTo(User, { foreignKey: 'adminId' });
User.hasMany(Product, { foreignKey: 'adminId' });

module.exports = Product;
