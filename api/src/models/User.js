const { DataTypes, DATE } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('user', {
        idUser: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4, // 36 Caracteres
            primaryKey: true,
            allowNull: false,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notNull: {
                msg: 'Nombre de usuario es obligatorio'
              }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                notNull: {
                    msg: 'El correo es obligatorio'
                  }
            }
        },
        password:  {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notNull: {
                msg: 'La contraseña es obligatoria'
              }
            }
          },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notNull: {
                msg: 'Nombre es obligatorio'
              }
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notNull: {
                msg: 'Apellido es obligatorio'
              }
            }
        },
        cellphone: {
            type: DataTypes.STRING,
            allowNull: true,            
        },
        profilePic: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        creditCard: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isCreditCard: true,
            }
        },
        status: {
            type: DataTypes.ENUM('active', 'banned', 'deleted'),
            allowNull: false,
            defaultValue: 'active'
        }, 
        isOnline: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        rol: {
            type: DataTypes.ENUM(['ADMIN_ROLE', 'USER_ROLE', 'GUEST_ROLE']),
            allowNull: false,
            validate: {
              notNull: {
                msg: 'El rol es obligatorio'
              }
            }
        },
        socketId: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        google: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    }, {
        timestamps: true
    });
};