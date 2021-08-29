// //Controllers
// const asyncHandler = require("express-async-handler");
// const bcrypt = require("bcryptjs");
// const dotenv = require("dotenv");
// const Services = require("../../Services");
// const JWT = require("../../utils/tokenGeneration");
// const ForgotPassEmail = require("../../Services/Emails/maile");

// dotenv.config();

// //http status code
// const { createUser, findUser, updateUserPass, findUserByPk } = Services;
// const { tokenGeneration } = JWT;

// const Register = asyncHandler(async (req, res) => {
//   try {
//     const firstName = req.body.firstName;
//     const lastName = req.body.lastName;
//     const email = req.body.email;
//     const user = createUser(firstName, lastName, email);
//     res.status(200).send(user);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

// const Login = asyncHandler(async (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   try {
//     const user = await findUser({ email });

//     if (!user) {
//       throw new Error("Unable to Login");
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       throw new Error("Unable to Login");
//     }

//     const token = tokenGeneration({
//       id: user.id,
//       email,
//       status: user.status,
//       password,
//     });

//     if (user.status === "admin") {
//       return res.status(200).send({ message: "User Is Admin", user, token });
//     }

//     return res.status(200).send({ user, token });
//   } catch (e) {
//     return res.status(400).send(e.message);
//   }
// });

// const ForgetPass = asyncHandler(async (req, res) => {
//   try {
//     const email = req.body.email;

//     const user = await findUser({ email });
//     if (!user) {
//       throw new Error("Invalid Email");
//     }

//     const token = tokenGeneration(
//       {
//         id: user.id,
//         email,
//         status: user.status,
//         password,
//       },
//       "15m"
//     );

//     ForgotPassEmail(email, token);
//     return res
//       .status(200)
//       .send("Password Reset Link has been sent to your email...");
//   } catch (e) {
//     return res.status(400).send("Unvalid Token!");
//   }
// });

// const ResetPass = asyncHandler(async (req, res) => {
//   try {
//     const id = req.user.id;
//     const hashpassword = bcrypt.hashSync(
//       req.body.password,
//       process.env.HASH_SALT
//     );

//     await updateUserPass(hashpassword, id);
//     const userData = await findUserByPk(id);
//     return res.status(200).send(userData);
//   } catch (err) {
//     return res.status(400).send();
//   }
// });

// const Controllers = {
//   Register,
//   Login,
//   ForgetPass,
//   ResetPass,
// };

// module.exports = Controllers;
