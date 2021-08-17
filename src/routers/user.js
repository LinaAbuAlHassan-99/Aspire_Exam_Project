const express = require("express");
//const auth = require("");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../Models/users");

//get users list
router.get("/", (req, res) => {
  User.findAll()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((error) => console.log(error));
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
    if (user.isAdmin) {
      return res.send("User is Admin");
    }
    res.send(user);
  } catch (e) {
    res.sendStatus(400).send(e.message);
  }
});

//Update password
router.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const hashpassword = bcrypt.hashSync(req.body.password, 10);
    const email = req.body.email;
    const user = await User.update(
      { password: hashpassword },
      { where: { id, email } }
    );
    const userData = await User.findByPk(user[0]);
    return res.status(200).send(userData);
  } catch (err) {
    return res.status(400).send();
  }
});

module.exports = router;
