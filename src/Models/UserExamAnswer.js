const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const UserExamAnswer = sequelize.define(
  "user-exam-answer",
  {
    description: {
      type: DataTypes.TEXT,
    },
    score: {
      type: DataTypes.TINYINT,
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

module.exports = UserExamAnswer;
