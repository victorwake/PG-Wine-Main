const { Wine } = require('../db');

const searchWineById = async (req, res) => {
  const id = req.params.id;
  const allWines = await Wine.findAll();
  
    if(id) {
      let filterWine = await allWines.filter(el => el.id == id);
      filterWine.length > 0 ?
      res.send(filterWine) :
      res.status(404).send('Wine ID not found, try with another');
    }
}

module.exports = { searchWineById };