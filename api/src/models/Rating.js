// rating.js
const { DataTypes, DATE } = require('sequelize');


module.exports = (sequelize) => {

    sequelize.define('rating', {

        stars: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
            validate: {
                len: [1, 5]
            }
    },
    }, {
        timestamps: true
    });
};