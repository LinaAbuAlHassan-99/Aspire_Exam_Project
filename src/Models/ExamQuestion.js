const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ExamQuestion = sequelize.define(
  "exam-question",
  {
    status: {
      type: DataTypes.ENUM("", ""),
      defaultValue: "",
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

module.exports = ExamQuestion;
