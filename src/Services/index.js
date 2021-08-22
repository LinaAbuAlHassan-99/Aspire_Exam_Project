const userServices = require("./user");
const { findAllUsers, createUser, findUser, updateUserPass, findUserByPk } =
  userServices;
const Services = {
  findAllUsers,
  createUser,
  findUser,
  updateUserPass,
  findUserByPk,
};
module.exports = Services;
