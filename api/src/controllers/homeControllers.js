const { Wine } = require("../db.js");

const getDbWines = async (req, res, next) => {
  console.log('aca si entre')
  try {
    const wines = await Wine.findAll();
    console.log(wines)
    const { name } = req.query;
    if (name) {
      let wineName = await wines.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      wineName.length ? res.status(200).send(wineName) : res.status(400).json({msg: "No se encuentra ningún vino con este nombre"});
    } else {
      res.status(200).send(wines);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getDbWines };