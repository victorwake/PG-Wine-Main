const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('wine', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
