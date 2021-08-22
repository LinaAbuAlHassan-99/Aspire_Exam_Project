const User = require("../Models/users");

const findAllUsers = async () => User.findAll();

const createUser = async (name, email, password, isAdmin) => {
  const emailCheck = await User.findOne({ where: { email } });
  if (emailCheck) {
    throw new Error("Invalid Registration");
  }

  const user = await User.create({
    name,
    email,
    password,
    isAdmin,
  });

  return user;
};

const findUser = (email) => {
  const user = User.findOne({ where: { email } });
  return user;
};

const updateUserPass = async (hashpassword, id, email) => {
  const user = await User.update(
    { password: hashpassword },
    { where: { id, email } }
  );
  return user;
};

const findUserByPk = async (user_id) => {
  return User.findByPk(user_id);
};
const userServices = {
  findAllUsers,
  createUser,
  findUser,
  updateUserPass,
  findUserByPk,
};

module.exports = userServices;
