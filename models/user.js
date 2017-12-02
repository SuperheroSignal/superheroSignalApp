module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		email: DataTypes.STRING,
		passward: DataTypes.STRING,
	});
	return User;
}

//add more content to tables