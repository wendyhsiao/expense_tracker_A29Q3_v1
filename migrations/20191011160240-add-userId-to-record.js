'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Records', 'UserId', {
      type: Sequelize.INTEGER,
      allowNull: false,  // 必填
      reference: {
        model: 'Users',
        key: 'id',
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Records', 'UserId');
  }
};
