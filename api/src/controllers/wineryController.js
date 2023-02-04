const { Wine } = require("../db.js");

const getWinery = async(req, res) => {
    let wineryParams = req.params.winery.toLowerCase().replace(/ /g, "");
    let wines = await Wine.findAll();
    let wineryReplace = await wines.map((el) =>
        el.winery.toLowerCase().replace(/ /g, "")
    );

    let wineryExits = await wineryReplace.some((el) => el === wineryParams);

    if (!wineryExits) {
        return res.status(401).json({
            msg: `Acción no permitida, indica una winery que corresponda`,
        });
    } else {
        let wineryFind = await wines.filter(
            (el) => el.winery.replace(/ /g, "").toLowerCase() === wineryParams
        );
        console.log(wineryFind);

        try {
            wineryFind.length ?
                res.status(200).send(wineryFind) :
                res.status(400).json({
                    msg: "Acción no permitida, indica una winery que corresponda. 002",
                });
            console.log(wineryFind);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
};

module.exports = { getWinery };