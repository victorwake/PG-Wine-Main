const { Wine } = require("../db.js");

const getTypeList = async(req, res) => {

    let wines = await Wine.findAll();
    let typeList = await wines.map((el) => el.colour_type);
    try {
        const dataArr = new Set(typeList);
        let result = [...dataArr];
        console.log(result)
        res.status(200).send(result)

    } catch (error) {
        res.status(400).json({ error: "Algo salió mal" });
    }

};
module.exports = { getTypeList };