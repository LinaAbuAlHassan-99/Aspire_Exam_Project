// const Services = require("../../Services");
// const JWT = require("../../utils/tokenGeneration");
// const User = require("../Models/User");
// const { findUserByPk } = Services;
// const { tokenVerification } = JWT;

// const resetPassAuth = async (req, res, next) => {
//   try {
//     const token = req.header("Authorization").replace("Bearer", "");
//     const decoded = tokenVerification(token);
//     const user = await User.findUserByPk(decoded.id);

//     if (!user) {
//       throw new Error();
//     }
//     req.user = user;
//     req.token = token;
//     next();
//   } catch (e) {
//     res.status(401).send({ error: "Please authinticate" });
//   }
// };

// module.exports = resetPassAuth;
