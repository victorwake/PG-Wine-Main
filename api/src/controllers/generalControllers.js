const { Wine } = require("../db.js");

const getDbWines = async (req, res, next) => {
  try {
    const wines = await Wine.findAll();
    const { name } = req.query;
    if (name) {
      let filteredWines;
      if (name === "winery") {
        filteredWines = wines.filter((el) =>
          el.winery.toLowerCase().includes(name.toLowerCase())
        );
      } else {
        filteredWines = wines.filter((el) =>
          el.name.toLowerCase().includes(name.toLowerCase())
        );
      }
      filteredWines.length
        ? res.status(200).send(filteredWines)
        : res.status(400).json({ msg: "No hay resultados para tu busqueda" });
    } else {
      res.status(200).send(wines);
    }
  } catch (err) {
    res.status(400).json({ error: err.msg });
  }
};

module.exports = { getDbWines };