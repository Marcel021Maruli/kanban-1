'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        title: 'Backlog',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: 'Todo',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: 'Done',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: 'Completed',
        createdAt: new Date,
        updatedAt: new Date
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Categories', null, {});
  }
};
