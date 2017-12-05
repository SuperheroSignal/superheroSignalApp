module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		email: DataTypes.STRING,
		password: DataTypes.STRING,
		username: DataTypes.STRING,
		hero_name: DataTypes.STRING,
		hero_rank: DataTypes.STRING,
		experience: DataTypes.STRING
	});

	User.associate = function(models) {
    // Associating User with Reports
    // When an Author is deleted, also delete any associated Posts
     	console.log('models')
     	console.log(models)
      User.hasMany(models.Report, {
        onDelete: "cascade"
      });
  	};

	return User;
};