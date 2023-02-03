
module.exports = {getDbWines}



const getDbWines = async () => {
    return await Wine.findAll({
        include: {
            model: wines,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
}