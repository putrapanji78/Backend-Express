'use strict';
module.exports = (sequelize, DataTypes) => {
  const menus = sequelize.define('menus', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {});
  menus.associate = function(models) {
    menus.belongsTo(models.categories, {
      as:'categoriesId',
      foreignKey: 'categories_id'
    })
  };
  return menus;
};