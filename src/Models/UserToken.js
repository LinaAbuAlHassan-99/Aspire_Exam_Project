const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
// const User = require("./User");
const UserToken = sequelize.define(
  "user_token",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    token: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM("valid", "invalid"),
      defaultValue: "invalid",
    },
  },
  {
    timestamps: true,
  }
);

// UserToken.belongsTo(User, { foreignKey: "user_id", targetKey: "id" });

module.exports = UserToken;
