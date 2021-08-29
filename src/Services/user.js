// const validator = require("validator");
// const User = require("../Model/User");

// //const findAllUsers = async () => User.findAll();

// const createUser = async (firstName, lastName, email, status = "user") => {
//   // const emailCheck = await User.findOne({ where: { email } });
//   // if (emailCheck) {
//   //   throw new Error("Invalid Registration");
//   // }
//   if (!validator.isEmail(email)) {
//     throw new Error("Invalid Registration");
//   }
//   const user = await User.create({
//     firstName,
//     lastName,
//     email,
//     status,
//   });

//   return user;
// };

// const findUser = (data) => {
//   const user = User.findOne({ where: { ...data } });
//   return user;
// };

// const updateUserPass = async (hashpassword, id) => {
//   const user = await User.update({ password: hashpassword }, { where: { id } });
//   return user;
// };

// const findUserByPk = async (user_id) => {
//   return User.findByPk(user_id);
// };
// const userServices = {
//   //findAllUsers,
//   createUser,
//   findUser,
//   updateUserPass,
//   findUserByPk,
// };

// module.exports = userServices;
