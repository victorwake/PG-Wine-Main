const { Wine } = require("../db.js");

const getWineryList = async(req, res) => {

    let wines = await Wine.findAll();
    let wineryList = await wines.map((el) => el.winery);
    try {
        const dataArr = new Set(wineryList);
        let result = [...dataArr];
        console.log(result)
        res.status(200).send(result)

    } catch (error) {
        res.status(400).json({ error: "Algo salió mal" });
    }

};

module.exports = { getWineryList };