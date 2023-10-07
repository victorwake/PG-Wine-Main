const { Wine } = require("../db.js");
const winesJson = require("../../data/winesDb.json");

const getDbWines = async (req, res, next) => {
  try {
    const { name } = req.query;
    
    if (name) {
      let filteredWines;
      if (name === "winery") {
        filteredWines = winesJson.filter((el) =>
          el.winery.toLowerCase().includes(name.toLowerCase())
        );
      } else {
        filteredWines = winesJson.filter((el) =>
          el.name.toLowerCase().includes(name.toLowerCase())
        );
      }
      if (filteredWines.length > 0) {
        res.status(200).send(filteredWines);
      } else {
        res.status(400).json({ msg: "No hay resultados para tu búsqueda" });
      }
    } else {
      res.status(200).send(winesJson);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
  
module.exports = { getDbWines };
