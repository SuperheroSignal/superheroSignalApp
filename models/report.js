module.exports = function(sequelize, DataTypes) {
	var Report = sequelize.define("Report", {
		situation: DataTypes.STRING,
		description: DataTypes.STRING, 
		createdAt: {
			allowNull: false,
			type: DataTypes.DATE(3),
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
		},
		updatedAt: {
			allowNull: false,
			type: DataTypes.DATE(3),
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
		},
	});

	Report.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Report.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
	return Report;
};