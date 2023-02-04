const { Wine } = require('../db');

const orderByPriceDes = async (req, res) => {
    const allWines = await Wine.findAll();

    const descendingOrder = allWines.sort(function (a, b) {
      if (a.price > b.price) {
        return -1;
      } else if (a.price < b.price) {
          return 1;
      }
      return 0 
    })    

    res.send(descendingOrder);  
}

module.exports = { orderByPriceDes };