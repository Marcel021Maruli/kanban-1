'use strict';
const bcrypt = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class User extends Model { }

  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Username Cannot Be Null'
        },
        notEmpty: {
          args: true,
          msg: 'Username cannot be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: 'wrong email format.'
        },
        notNull: {
          args: true,
          msg: "Email cannot be null."
        },
        notEmpty: {
          args: true,
          msg: "Email cannot empty."
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Password cannot be null."
        },
        notEmpty: {
          args: true,
          msg: "Password cannot empty."
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(user, options) {
        return user.password = bcrypt.hashing(user.password)
      }
    },
    sequelize
  });

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Kanban)
  };
  return User;
};