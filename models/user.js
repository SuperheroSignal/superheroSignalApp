module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		username: DataTypes.STRING,
		googleId: DataTypes.STRING
	});
	return User;
}

//add more content to tables