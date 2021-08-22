const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const Services = require("../../Services");
const JWT = require("../../utils/tokenGeneration");
const updateEmail = require("../Emails/maile");

const { findAllUsers, createUser, findUser, updateUserPass, findUserByPk } =
  Services;
const { tokenGeneration } = JWT;
const ListUsers = asyncHandler(async (req, res) => {
  try {
    const users = await findAllUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send();
  }
});

const Register = asyncHandler(async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;
    const user = await createUser(name, email, password, isAdmin);
    const token = tokenGeneration(user.id);
    return res.status(200).send({ user, token });
  } catch (e) {
    return res.status(400).send(e.message);
  }
});

const Login = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await findUser(email);

    if (!user) {
      throw new Error("Unable to Login");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Unable to Login");
    }

    //generate token for user
    // const token = await jwt.sign(
    //   { id: user.id.toSting() },
    //   secret
    // );

    //her i call the token model

    const token = tokenGeneration(user.id);

    if (user.isAdmin) {
      return res.status(200).send({ message: "User Is Admin", user, token });
    }

    return res.status(200).send({ user, token });
  } catch (e) {
    return res.status(400).send(e.message);
  }
});

//Update password
const UpdatePass = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const hashpassword = bcrypt.hashSync(req.body.password, 10);
    const email = req.body.email;
    const user = await updateUserPass(hashpassword, id, email);

    //updateEmail(email);
    const userData = await findUserByPk(user[0]);

    return res.status(200).send(userData);
  } catch (err) {
    return res.status(400).send();
  }
});

const userControllers = {
  ListUsers,
  Register,
  Login,
  UpdatePass,
};

module.exports = userControllers;
