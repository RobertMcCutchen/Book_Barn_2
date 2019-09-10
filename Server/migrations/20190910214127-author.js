'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
      'Books',
      'author',
      Sequelize.STRING
      )

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
      'Books',
      'author',
      )
  
  }
};
