const { Wine } = require('../db');

const orderByPriceAsc = async(req, res) => {
    const allWines = await Wine.findAll();
    let min = req.params.min;
    let max = req.params.max;

    if (min < 0 || max < 0) {
        res.status(500).send('Numerous negatives are not allowed');
    }
    if (!min) {
        min = 0;
    }
    if (!max || max === 0) {
        max = 1000000;
    } else if (min > max) {
        let copiaMin = min;
        min = max;
        max = copiaMin;
    }

    if (min >= 0 && max >= 0) {
        const filterWines = allWines.filter(el => el.price >= min && el.price <= max)
        const ascendingOrder = filterWines.sort(function(a, b) {
            if (a.price > b.price) {
                return 1;
            } else if (a.price < b.price) {
                return -1;
            }
            return 0
        })
        res.send(ascendingOrder);
    }
}

module.exports = { orderByPriceAsc };