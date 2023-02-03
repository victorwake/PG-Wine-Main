const { Wine } = require('../db');

const getAllProvinces = async (req, res) => {
  const allWines = await Wine.findAll();
  const provinces = [];

  allWines.forEach(el => {
    if (!provinces.includes(el.province)) {
      provinces.push(el.province);
    }
  });

     res.send(provinces);
}

module.exports = { getAllProvinces };