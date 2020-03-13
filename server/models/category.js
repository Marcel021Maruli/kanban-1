'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class Category extends Model { }

  Category.init({
    title: DataTypes.STRING
  }, { sequelize });

  Category.associate = function (models) {
    // associations can be defined here
    Category.hasMany(models.Kanban)
  };
  return Category;
};