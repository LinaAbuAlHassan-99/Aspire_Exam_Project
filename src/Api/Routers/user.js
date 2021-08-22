const express = require("express");
const userControllers = require("../Controllers");
const router = express.Router();

const { ListUsers, Register, Login, UpdatePass } = userControllers;

//get users list
router.route("/").get(ListUsers);

//Register
router.route("/users").post(Register);

//Login
router.route("/users/login").post(Login);

//Update Password
router.route("/users/:id").patch(UpdatePass);

/*
//new rout for haveing the password send from react
//send token whith the link
router.patch("/users/:id", async (req, res) => {});
*/
module.exports = router;
