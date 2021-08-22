const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const TOKEN_SECRET = process.env.TOKEN_SECRET;

const tokenGeneration = (id) => {
  return jwt.sign({ id }, TOKEN_SECRET, { expiresIn: "7d" });
};

const tokenVerification = (token) => jwt.verify(token, TOKEN_SECRET);

const JWT = {
  tokenGeneration,
  tokenVerification,
};

module.exports = JWT;
