<<<<<<< HEAD
const {Wine} = require ('../db.js')


const getDbWines = async (req, res, next) => {
    try {
        const wines = await Wine.findAll();
        res.send(wines);
    } catch (error) {
        next(error);
    }
}


module.exports = {getDbWines}
=======
const { Wine } = require("../db.js");

const getDbWines = async (req, res, next) => {
  try {
    const wines = await Wine.findAll();
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
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getDbWines };
>>>>>>> 6cc14e96a2bdc8bca49c3ba2522317a92fdf2eb3
