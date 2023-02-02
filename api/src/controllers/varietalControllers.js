const { Varietal } = require('../db.js');




const getDbVarietal = async (req, res, next) => {
    try {
        const varietalDb = await Varietal.findAll()
        res.send(varietalDb);
    } catch (error) {
        next(error);
    }
};


module.exports = {getDbVarietal}