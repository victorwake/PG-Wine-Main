const { Wine } = require('../db');

const orderByPriceDes = async (req, res) => {
  const allWines = await Wine.findAll();
  const orderBy = req.query.orderBy;
  const orderType = req.query.orderType;
  let minPrice = req.query.minPrice;
  let maxPrice = req.query.maxPrice;

  if(minPrice < 0 || maxPrice < 0) {
    res.status(500).send('Numerous negatives are not allowed');
  } if(!minPrice) {
      minPrice = 0;
    } if(!maxPrice || maxPrice === 0) {
        maxPrice = 10000;
      } else if(minPrice > maxPrice) {
          let copiaMinPrice = minPrice;
          minPrice = maxPrice;
          maxPrice = copiaMinPrice;
        } 
  
  if(minPrice >= 0 && maxPrice >= 0 && orderBy === 'Price' && orderType === 'Des') {
    const filterWines = allWines.filter(el => el.price >= minPrice && el.price <= maxPrice)
    const descendingOrder = filterWines.sort(function (a, b) {
      if (a.price > b.price) {
        return -1;
      } else if (a.price < b.price) {
          return 1;
      }
      return 0 
    })    

  res.send(descendingOrder); 
  } 
}

module.exports = { orderByPriceDes };