const { Wine } = require("../db.js");

<<<<<<< HEAD
const getWineryList = async(req, res) => {
=======
const getWineryList = async (req, res) => {
>>>>>>> adf19d32e6d5837eecf8e3a9bbded53b956a6597

    let wines = await Wine.findAll();
    let wineryList = await wines.map((el) => el.winery);
    try {
<<<<<<< HEAD
        const dataArr = new Set(wineryList);
        let result = [...dataArr];
        console.log(result)
        res.status(200).send(result)

    } catch (error) {
        res.status(400).json({ error: "Algo salió mal" });
    }

=======
      const dataArr = new Set(wineryList);
      let result = [...dataArr];
         console.log(result)
       res.status(200).send(result)
    
  } catch (error) {
    res.status(400).json({ error: "Algo salió mal" });
  }
  
>>>>>>> adf19d32e6d5837eecf8e3a9bbded53b956a6597
};

module.exports = { getWineryList };