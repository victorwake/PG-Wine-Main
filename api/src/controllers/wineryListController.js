const { Wine } = require("../db.js");

const getWineryList = async (req, res) => {

    let wines = await Wine.findAll();
    let wineryList = await wines.map((el) => el.winery);
    let wineryListApi = [];
    try {
      for (var i = 0; i < wineryList.length; i++) {
        if (wineryList[i] !==  wineryList[i + 1] ) {
          wineryListApi.push(wineryList[i]);
        }
       }
       console.log(wineryListApi)
       res.status(200).send(wineryListApi)
    
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
  
};

module.exports = { getWineryList };