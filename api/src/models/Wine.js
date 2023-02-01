const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('wine', {
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

    varietal: {
      type: DataTypes.STRING,

    },

    colour_type: {
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
},
  {
    timestamps: false,
    });
};
