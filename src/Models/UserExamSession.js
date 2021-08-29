const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const UserExamSession = sequelize.define(
  "user_exam_session",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = UserExamSession;
