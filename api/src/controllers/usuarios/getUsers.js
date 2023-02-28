const { User } = require("../../db");
const getDbUsers = async (req, res, next) => {
  try {
    const userDb = await User.findAll();
    res.status(200).json(userDb);
  } catch (err) {
    res.status(400).json({ error: err.msg });
  }
};
const getAdmin = async (req, res, next) => {
  try {
    const userDb = await User.findAll();
    const user = userDb.filter((user) => user.rol === "USER_ROLE");
    const userUser = user.map((user) => user.idUser);
    res.status(200).json(userUser);
  } catch (err) {
    res.status(400).json({ error: err.msg });
  }
};

const getUser = async (req, res, next) => {
  try {
    const userDb = await User.findAll();
    const user = userDb.filter((user) => user.rol === "USER_ROLE");
    const userUser = user.map((user) => user.idUser);
    res.status(200).json(userUser);
  } catch (err) {
    res.status(400).json({ error: err.msg });
  }
};
module.exports = {
  getDbUsers,
  getAdmin,
  getUser,
};
