const { Wine } = require('../db');

const filterWinesByProvince = async (req, res) => {
    const province = req.query.province;
    const allWines = await Wine.findAll();
  
    if(province) {
      const filterProvince = await allWines.filter(el => {
        if(el.province) {
          const allProvinces = el.province;
           return allProvinces.includes(province); 
        }
      })
      filterProvince.length > 0 ?
        res.send(filterProvince) : 
        res.status(404).send(`"${province}" has not wines, please try with another`);
    }
}

module.exports = { filterWinesByProvince };