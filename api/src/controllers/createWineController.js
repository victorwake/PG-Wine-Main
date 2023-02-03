const { Wine } = require('../db');

const createWine = async (req, res) => {
  let {
    name,
    varietal,
    colour_type,
    winery,
    price,
    alcohol,
    volume,
    image,
    stock,
    year,
    province,
    region,
    url,
    description
  } = req.body;

  await Wine.create ({
    name,
    varietal,
    colour_type,
    winery,
    price,
    alcohol,
    volume,
    image,
    stock,
    year,
    province,
    region,
    url,
    description
  })

  res.send('Wine created succesfully!!');
}

module.exports = { createWine };