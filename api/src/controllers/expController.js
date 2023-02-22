const { Experiences } = require("../db.js");

const getDbExp = async (req, res, next) => {
  try {
    const experiences = await Experiences.findAll();
    const { name } = req.query;
    console.log(name)
    if (name) {
      let expName = await experiences.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      expName.length  ? res.status(200).send(expName) : next;
    } else {
      res.status(200).send(experiences);
    }
  } catch (err) {
    res.status(400).json({ error: err.msg });
  }
};

module.exports = { getDbExp };