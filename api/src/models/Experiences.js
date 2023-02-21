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
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ubication: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        kindOfExp:{
            type: DataTypes.ARRAY (DataTypes.STRING),
            allowNull: false,
            defaultValue: ['Gastronomía', 'Hoteleria', 'Degustaciones', 'Paseos', 'Visitas guiadas'],
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        eventDate:{
            type: DataTypes.STRING,
            allowNull: true,
        },
       image:{
        type: DataTypes.ARRAY (DataTypes.JSONB),
        allowNull: true,
        defaultValue:[]
       },
          url: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },{
        timestamps: false,
    });
}
