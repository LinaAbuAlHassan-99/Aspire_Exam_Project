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
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    // tokens: [
    //   {
    //     token: {
    //       type: DataTypes.STRING,
    //       allowNull: false,
    //     },
    //   },
    // ],
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

// const User = (sequelize, DataTypes) => {
//   const User = sequelize.define("users", {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     isAdmin: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//     },
//   });

//   User.prototype.hashPassword = async function () {
//     return await bcrypt.hash(this.password, 10);
//   };

//   User.beforeCreate(async (user) => {
//     user.password = await user.hashPassword(user.password);
//   });
//   User.afterUpdate(async (user) => {
//     user.password = await user.hashPassword(user.password);
//   });

//   // User.prototype.validPassword = async function (password) {
//   //   return await bcrypt.compare(password, this.password);
//   // };
//   // User.associate = (models) => {
//   //   User.hasMany(models.Token, {
//   //     onDelete: "CASCADE",
//   //   });
//   // };

//   return User;
// };
// module.exports = User;
