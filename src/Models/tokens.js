const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../config/database");



//token table will afect
const Token = db.define("Token", {
  tokens: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

console.log(User === db.models.User);

module.exports = Token;
