'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Records', 'name', {
      allowNull: false,  // 必填
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Records', 'name');
  }
};
