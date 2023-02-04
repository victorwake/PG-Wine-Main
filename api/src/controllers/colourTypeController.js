const { Wine } = require("../db.js");

const getColourType = async (req, res) => {
  let type = req.params.type;
  let wines = await Wine.findAll();
  let wineType = await wines.some((el) =>
    el.colour_type.toLowerCase().includes(type.toLowerCase())
  );

  if (!wineType) {
    return res.status(401).json({
      msg: `Acción no permitida, indica un colour_type que corresponda`,
    });
  } else {
    let wineTypeFind = await wines.filter(
      (el) => el.colour_type.toLowerCase() === type.toLowerCase()
    );

    try {
      wineTypeFind.length
        ? res.status(200).send(wineTypeFind)
        : res
            .status(400)
            .json({
              msg: "Acción no permitida, indica un colour_type que corresponda",
            });
      console.log(wineTypeFind);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

module.exports = { getColourType };