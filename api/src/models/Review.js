const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

   sequelize.define('review', {
    idReview: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // 36 characters
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
  },
    wineId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // validate: {
      //   min: 1,
      //   max: 5,
      // }
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    timestamps: true,
  })
}