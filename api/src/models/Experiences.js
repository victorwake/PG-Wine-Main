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
        },
        ubication: {
            type: DataTypes.TEXT,
        },
        kindOfExp:{
            type: DataTypes.STRING,
        },
        description:{
            type: DataTypes.TEXT,
    
        },
        eventDate:{
            type: DataTypes.STRING,
        },
       image:{
        type: DataTypes.ARRAY (DataTypes.JSONB),
        allowNull: true,
        defaultValue:[]
       },
          url: {
            type: DataTypes.TEXT,
        }
    },{
        timestamps: false,
    });
}
