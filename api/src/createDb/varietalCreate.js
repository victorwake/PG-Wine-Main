const { Varietal } = require('../db');


/*Creo las varietal en la DB*/
const insertVarietal = async () => {
    const typeOfVarietal = [
        {name: 'Sauvignon Blanc'},
        {name: 'Bonarda'},
        {name: 'Pinot Noir'},
        {name: 'Cabernet Franc'},
        {name: 'Malbec'},
        {name: 'Corte'},
        {name: 'Cabernet Sauvignon'},
        {name: 'Chardonnay'},
        {name: 'Pedro Ximénez'},
        {name: 'Pinot Gris'},
        {name: 'Merlot'},
        {name: 'Syrah'},
        {name: 'Torrontés'},
        {name: 'Tannat'},
        {name: 'Semillón'},
        {name: 'Grenache'},
        {name: 'Xbox One'},
        {name: 'Xbox Series S/X'}
    ]
    await Varietal.bulkCreate(typeOfVarietal);
    console.log('varietal loaded in the db');  
};

const getDbVarietal = async (req, res, next) => {
    try {
        const varietalDb = await Varietal.findAll()
        res.send(varietalDb)
    } catch (err) {
        next(err)
    }
};

module.exports = {
    insertVarietal,
    getDbVarietal,
}