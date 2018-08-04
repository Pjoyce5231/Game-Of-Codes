module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    Email: { type: DataTypes.STRING, primaryKey: true },
    Password: { type: DataTypes.STRING }
  });
  return User;
};