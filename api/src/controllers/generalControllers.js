const { Wine } = require("../db.js");

const getDbWines = async (req, res, next) => {
  try {
    const wines = await Wine.findAll();
    const { wine } = req.query;
    if (wine) {
      let wineName = await wines.filter((el) =>
        el.name.toLowerCase().includes(wine.toLowerCase())
      );
      wineName.length ? res.status(200).send(wineName) : res.status(400).send("No se encuentra este vino");
    } else {
      res.status(200).send(wines);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getDbWines };
