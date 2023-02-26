const { DataTypes, DATE } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("order", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // 36 Caracteres
      primaryKey: true,
      allowNull: false,
    },
    payment_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ammount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    items: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
    },
    shipping_address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    order_email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    order_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
