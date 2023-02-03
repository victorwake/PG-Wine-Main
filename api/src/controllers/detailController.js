const { Wine } = require("../db.js");

const getDetails = async (req, res) => {
  let id = req.params.id;
  let wines = await Wine.findAll();
  let wine = await wines.some((el) => el.id === id);

  if (!wine) {
    return res.status(401).json({
      msg: `La ${id} no corresponde a una id vino válida`,
    });
  } else {
    const wineDetail = await Wine.findOne({
      where: { id: id },
    });
    console.log(wineDetail);
    try {
      res.status(200).send(wineDetail);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

module.exports = { getDetails };