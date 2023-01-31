const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('varietal', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },{
        timestamps: false,
    });
};
