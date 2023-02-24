const { Experiences } = require("../db.js");

const getExpDetails = async (req, res) => {
  let id = req.params.id;
  let experiences = await Experiences.findAll();
  let experience = await experiences.some((el) => el.id === id);

  if (!experience) {
    return res.status(401).json({
      msg: `La ${id} no corresponde a una id experiencia válida`,
    });
  } else {
    const expDetail = await Experiences.findOne({
      where: { id: id },
    });
    console.log(expDetail);
    try {
      res.status(200).send(expDetail);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

module.exports = { getExpDetails };
