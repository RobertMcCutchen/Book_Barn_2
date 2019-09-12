'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Books',
      'publisher',
      Sequelize.STRING
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Books',
      'publisher',
    )
  }
};
