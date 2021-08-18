const express = require("express");
//const auth = require("");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../Models/users");
const jwt = require("jsonwebtoken");
const updateEmail = require("../emails/maile");
//get users list
router.get("/", (req, res) => {
  User.findAll()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((error) => res.status(400).send());
});
//Rejester
router.post("/users", async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      isAdmin: req.body.isAdmin,
    });

    return res.status(200).send(user);
  } catch (e) {
    return res.status(400).send(e.message);
  }
});

//Login
router.post("/users/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.findOne({ where: { email } });

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
    //   "thisisthesecretisether"
    // );

    //her i call the token model

    if (user.isAdmin) {
      return res.send({ message: "User Is Admin", user });
    }

    return res.send(user);
  } catch (e) {
    return res.sendStatus(400).send(e.message);
  }
});

//Update password
router.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log(id);
    const hashpassword = bcrypt.hashSync(req.body.password, 10);
    const email = req.body.email;
    const user = await User.update(
      { password: hashpassword },
      { where: { id, email } }
    );
    //updateEmail(email);
    const userData = await User.findByPk(user[0]);
    return res.status(200).send(userData);
  } catch (err) {
    return res.status(400).send();
  }
});

//new rout for haveing the password send from react
//send token whith the link
router.patch("/users/:id", async (req, res) => {});

module.exports = router;
