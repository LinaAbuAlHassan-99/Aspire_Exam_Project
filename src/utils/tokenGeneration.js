const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const TOKEN_SECRET = process.env.TOKEN_SECRET;

const tokenGeneration = (data, time = "7d") => {
  return jwt.sign({ ...data }, TOKEN_SECRET, { expiresIn: time });
};

const tokenVerification = (token) => jwt.verify(token, TOKEN_SECRET);

const JWT = {
  tokenGeneration,
  tokenVerification,
};

module.exports = JWT;
