const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "wine",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // 36 Caracteres
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // varietal: {
      //   type: DataTypes.ARRAY(DataTypes.JSONB),
      //   allowNull: false,
      //   defaultValue: [],
      // },
      varietal: {
        type: DataTypes.STRING,
      },

      color_type: {
        type: DataTypes.STRING,
      },

      winery: {
        type: DataTypes.STRING,
      },

      price: {
        type: DataTypes.FLOAT,
      },
      alcohol: {
        type: DataTypes.FLOAT,
      },
      volume: {
        type: DataTypes.INTEGER,
      },

      image: {
        type: DataTypes.TEXT,
      },

      stock: {
        type: DataTypes.INTEGER,
      },
      year: {
        type: DataTypes.INTEGER,
      },
      province: {
        type: DataTypes.STRING,
      },
      region: {
        type: DataTypes.TEXT,
      },
      url: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
      promotion: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      numOfReviews: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      timestamps: false,
    }
  );
};
