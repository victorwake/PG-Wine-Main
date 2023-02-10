const { Wine } = require("../db.js");

const getDbWines = async(req, res, next) => {
    try {
        const wines = await Wine.findAll();
        const { name } = req.query;
        if (name) {
            let wineName = await wines.filter((el) =>
                el.name.toLowerCase().includes(name.toLowerCase())
            );
            wineName.length ? res.status(200).send(wineName) : next;
        }
        if (name) {
            let wineWinery = await wines.filter((el) =>
                el.winery.toLowerCase().includes(name.toLowerCase())
            );
            wineWinery.length ? res.status(200).send(wineName) : res.status(400).json({ msg: "No se encuentra ningún vino con este nombre" });
        } else {
            res.status(200).send(wines);
        }
    } catch (error) {
        res.status(400).json({ error: err.msg });
    }
};

module.exports = { getDbWines };