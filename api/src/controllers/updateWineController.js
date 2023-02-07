const { Wine } = require('../db');

const updateWine = async (req, res) => {
  const idUpdateWine = req.params.id;

  let {
    name,
    varietal,
    color_type,
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

  if(!name || !varietal || !color_type || !winery || !price || !image || !url || !description) {
    res.status(500).send('Complete all required fields');
  } else if(price < 0 || alcohol < 0 || volume < 0 ) {
      res.status(500).send('Numerous negatives are not allowed');  
    } else {
        await Wine.update ({
          name : name,
          varietal : varietal,
          color_type: color_type,
          winery: winery,
          price: price,
          alcohol: alcohol,
          volume: volume,
          image: image,
          stock: stock,
          year: year,
          province: province,
          region: region,
          url: url,
          description: description
        },
        {
          where : {id : idUpdateWine}
        }); 

      res.send('Wine modified succesfully!!');
    }
}

module.exports = { updateWine };