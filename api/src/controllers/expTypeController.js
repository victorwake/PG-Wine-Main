const { Experiences } = require("../db.js");

const getExpType = async (req, res) => {
  let type = req.params.type;
  let experiences = await Experiences.findAll();
  let expType = await experiences.some((el) =>
    el.kindOfExp.toLowerCase().includes(type.toLowerCase())
  );

  if (!expType) {
    return res.status(401).json({
      msg: `Acción no permitida, indica un kindOfExp que corresponda`,
    });
  } else {
    let expTypeFind = await experiences.filter(
      (el) => el.kindOfExp.toLowerCase() === type.toLowerCase()
    );

    try {
      expTypeFind.length
        ? res.status(200).send(expTypeFind)
        : res
            .status(400)
            .json({
              msg: "Acción no permitida, indica un kindOfExp que corresponda",
            });
      console.log(expTypeFind);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

module.exports = { getExpType };
