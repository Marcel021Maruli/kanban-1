'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class Kanban extends Model { }

  Kanban.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Kanban's Cannot Null."
        },
        notEmpty: {
          args: true,
          msg: "Kanban's Cannot Empty."
        }
      }
    },
    CategoryId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, { sequelize });

  Kanban.associate = function (models) {
    // associations can be defined here
    Kanban.belongsTo(models.User)
    Kanban.belongsTo(models.Category)
  };
  return Kanban;
};