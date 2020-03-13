'use strict';
const bcrypt = require('../helpers/bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [{
      username: 'marcel',
      email: 'marcel.owner@gmail.com',
      password: bcrypt.hashing('ini gue'),
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});
  }
};
