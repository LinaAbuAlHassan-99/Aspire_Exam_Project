const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../config/database");

const User = db.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: (user, options) => {
        {
          user.password =
            user.password && user.password != ""
              ? bcrypt.hashSync(user.password, 10)
              : "";
        }
      },
    },
  }
);

console.log(User === db.models.User);

module.exports = User;
