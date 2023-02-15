const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('experiences', {
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
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        ubication: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        kindOfExp:{
            type: DataTypes.ENUM('Gastronomía', 'Hoteleria', 'Degustaciones', 'Paseos'),
            allowNull: false,
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        eventDate:{
            type: DataTypes.DATE,
            allowNull: true,
        },
       image:{
        type: DataTypes.TEXT,
        allowNull: true,
       },
       duration:{
        type: DataTypes.INTEGER,
        allowNull: true,
       },
          url: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },{
        timestamps: false,
    });
}