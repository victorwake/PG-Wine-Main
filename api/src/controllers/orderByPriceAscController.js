const { Wine } = require('../db');

const orderByPriceAsc = async (req, res) => {
    const allWines = await Wine.findAll();

    const ascendingOrder = allWines.sort(function (a, b) {
      if (a.price > b.price) {
        return 1;
      } else if (a.price < b.price) {
          return -1;
        }
      return 0 
    })
    
    res.send(ascendingOrder);  
}

module.exports = { orderByPriceAsc };