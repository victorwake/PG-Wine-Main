const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
/*   sequelize.define('wine', {
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

    varietal: {
      type: DataTypes.STRING,

    },

    colour_type: {
      type: DataTypes.STRING,
    },

    winery: {
      type: DataTypes.STRING,
    },

    price: {
      type: DataTypes.FLOAT,

    },
    alcohol: {
      type: DataTypes.FLOAT,

    },
    volume: {
      type: DataTypes.INTEGER,  

    },

    image: {
      type: DataTypes.TEXT,
  },

  stock: {
    type: DataTypes.INTEGER,

  },
  year: {
    type: DataTypes.INTEGER,

  },
  province: {
    type: DataTypes.STRING,

  },
  region: {
    type: DataTypes.TEXT,

  },
  url: {
    type: DataTypes.TEXT,

  },
  description: {
    type: DataTypes.TEXT,

    
  },
},
  {
    timestamps: false,
    });
}; */

sequelize.define('wine', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, // 36 Caracteres
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull:{
        args: true,
        msg: 'name attribute is missing'
     },
    notEmpty: {
        args: true,
        msg: 'name must be provided'
        },    
  },
  },

  varietal: {
    type: DataTypes.STRING,
    allowNull: false,
/*     type: DataTypes.ARRAY(DataTypes.JSONB),
    allowNull: false,
    defaultValue: [], */
    validate: {
      notNull:{
        args: true,
        msg: 'varietal attribute is missing'
     },
      notEmpty: {
        args: true,
        msg: 'varietal must be provided'
        },
  },
  },

  color_type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull:{
        args: true,
        msg: 'color type attribute is missing'
     },
      notEmpty: {
        args: true,
        msg: 'color type must be provided'
        },
      //is: /^[a-z-]{1,20}$/
  },
  },

  winery: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull:{
        args: true,
        msg: 'winery attribute is missing'
     },
      notEmpty: {
        args: true,
        msg: 'winery must be provided'
        },
      //is: /^[a-z0-9]{1,20}$/      
  },
  },

  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: 'price attribute is missing'
      },
      min: 1,
      max: 900000,
      validator(value) {
        if(value < 1 || value > 900000) {
          throw new Error ('price must be between 1 and 900.000');
        }
      },
    }
  },
  alcohol: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: 'alcohol attribute is missing'
      },
      min: 1,
      max: 20,
      validator(value) {
        if(value < 1 || value > 20) {
          throw new Error ('alcohol must be between 1 and 20');
        }
      },
    }
  },
  volume: {
    type: DataTypes.INTEGER,  
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: 'volume attribute is missing'
      },
      min: 1,
      max: 5000,
      validator(value) {
        if(value < 1 || value > 5000) {
          throw new Error ('volume must be between 1 and 5000');
        }
      },
    }
  },

  image: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: 'image attribute is missing'
      },
      notEmpty: {
        args: true,
        msg: 'url must be provided'
        },
      is: /(http|https?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%.~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%.~#?&//=]*)/
    }
},

stock: {
  type: DataTypes.INTEGER,
  allowNull: false,
  validate: {
    notNull: {
      args: true,
      msg: 'stock attribute is missing'
    },
    min: 1,
    max: 1000,
    validator(value) {
      if(value <= 0 || value > 1000) {
        throw new Error ('stock must be between 1 and 1000');
      }
    },
  }

},
year: {
  type: DataTypes.INTEGER,
  allowNull: false,
  validate: {
    notNull: {
      args: true,
      msg: 'year attribute is missing'
    },
    min: 1900,
    max: 2023,
    validator(value) {
      if(value < 1900 || value > 2023) {
        throw new Error ('year must be between 1900 and 2023');
      }
    },
  }
},
province: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    notNull:{
      args: true,
      msg: 'province attribute is missing'
   },
    notEmpty: {
      args: true,
      msg: 'province must be provided'
      },
    //is: /^[a-z-]{1,20}$/ //Las provincias se manejan desde el front 
},
},
region: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    notNull:{
      args: true,
      msg: 'region attribute is missing'
   },
    notEmpty: {
      args: true,
      msg: 'region must be provided'
      },
    //is: /^[a-z-]{1,20}$/ 
},
},
url: {
  type: DataTypes.TEXT,
  allowNull: false,
  validate: {
    notNull: {
      args: true,
      msg: 'url attribute is missing'
    },
    notEmpty: {
      args: true,
      msg: 'url must be provided'
      },
    is: /(http|https?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%.~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%.~#?&//=]*)/
  }
},
description: {
  type: DataTypes.TEXT,
  allowNull: false,
},
},
{
  timestamps: false,
  });
};