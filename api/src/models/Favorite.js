const { DataTypes, DATE } = require('sequelize');

module.exports = (sequelize) => {
    
        sequelize.define('favorite', {
            // idFavorite: {
            //     type: DataTypes.UUID,
            //     defaultValue: DataTypes.UUIDV4, // 36 Caracteres
            //     primaryKey: true,
            //     allowNull: false,
            // },
            userId: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            wineId: {
                type: DataTypes.UUID,
                allowNull: false,
            },
        }, {
            timestamps: true
        });
    };