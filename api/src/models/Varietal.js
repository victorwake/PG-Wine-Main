const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('varietal', {
        id : {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
          },
        varietal_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};
