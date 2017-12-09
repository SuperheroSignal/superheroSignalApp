module.exports = function(sequelize, DataTypes) {
	// 
	var User = sequelize.define("User", {
   // id: {
   //    type: DataTypes.INTEGER,
   //    primaryKey: true,
   //    autoIncrement: true
   //  },
   //  email: {
   //    type: DataTypes.STRING,
   //    unique: true,
   //    validate: {
   //      isEmail: true
   //    }
   //  },
   //  password: {
   //    type: DataTypes.STRING,
   //  },
    facebook_id: {
      type: DataTypes.STRING,
      unique: true
    },
    facebook_token: {
      type: DataTypes.STRING,
    },
    facebook_email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    facebook_name: {
      type: DataTypes.STRING,
    }
  }, {

    // explicitly tell sequelize what the name of the table will be
    tableName: 'users',

    // stop seauelize from creating timestamp columns by default
    timestamps: false

  })
	return User
}

//add more content to tables