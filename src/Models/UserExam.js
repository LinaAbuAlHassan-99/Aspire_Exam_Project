const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const UserExam = sequelize.define(
  "user_exam",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    scheduale_data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("", ""),
      defaultValue: "",
    },
    score: {
      type: DataTypes.INTEGER,
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updatedBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = UserExam;
