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

  if(!name || !varietal || !colour_type || !winery || !price || !image || !stock || !url || !description) {
    res.status(500).send('Complete all required fields');
  } else if(price < 0 || alcohol < 0 || volume < 0 || stock < 0) {
      res.status(500).send('Numerous negatives are not allowed');  
    } else {
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
}

module.exports = { createWine };