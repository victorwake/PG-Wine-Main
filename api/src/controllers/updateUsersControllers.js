const { User } = require("../db");

const updateUser = async (req, res) => {
  const idUser = req.params.id;

  let { status, rol } = req.body;

  if (!status || !rol) {
    res.status(500).send("Complete all required fields");
  } else {
    await User.update(
      {
        status: status,
        rol: rol,
      },
      {
        where: { idUser: idUser },
      }
    );

    res.send("User modified succesfully!!");
  }
};

module.exports = { updateUser };
