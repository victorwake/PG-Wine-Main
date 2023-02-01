const {Wine} = require ('../db.js')


const getDbWines = async (req, res, next) => {
    try {
        const wines = await Wine.findAll();
        res.send(wines);
    } catch (error) {
        next(error);
    }
}


module.exports = {getDbWines}