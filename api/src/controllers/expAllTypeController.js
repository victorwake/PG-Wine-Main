const { Experiences } = require("../db.js");

const getAllType = async (req, res) => {
  let expType = await Experiences.findAll();

  if (!expType) {
    return res.status(401).json({
      msg: `No se encontraron datos`,
    });
  } else {
    let expTypeFind = await expType.filter(
      (el) => el.kindOfExp.toLowerCase() === type.toLowerCase()
    );

    try {
      expTypeFind.length
        ? res.status(200).send(expTypeFind)
        : res.status(400).json({
            msg: "Acción no permitida, indica un kindOfExp que corresponda",
          });
      console.log(expTypeFind);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

module.exports = { getAllType };
