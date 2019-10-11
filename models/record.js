'use strict';
module.exports = (sequelize, DataTypes) => {
  const Record = sequelize.define('Record', {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    date: DataTypes.DATE,
    amount: DataTypes.INTEGER
  }, {});
  Record.associate = function (models) {
    // associations can be defined here
    Record.belongsTo(models.User) // 設定 Record 多對一 (user)))
  };
  return Record;
};