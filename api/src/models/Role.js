const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('role', {
        idRol: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4, // 36 Caracteres
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notNull: {
                msg: 'El rol es obligatorio'
              }
            }
          }
    }, {
        timestamps: false,
    });
};