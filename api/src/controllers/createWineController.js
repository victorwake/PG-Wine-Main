const { Wine } = require('../db');

const createWine = async(req, res) => {
    let {
        name,
        varietal,
        color_type,
        winery,
        price,
        stock,
        alcohol,
        volume,
        image,
        year,
        province,
        region,
        url,
        rating,
        numOfReviews,
        reviews: [],
        description
    } = req.body;

    if (!name || !varietal || !color_type || !winery || !price || !image || !url || !description) {
        res.status(500).send('Complete all required fields');
    } else if (price < 0 || alcohol < 0 || volume < 0) {
        res.status(500).send('Numerous negatives are not allowed');
    } else {
        await Wine.create({
            name,
            varietal,
            color_type,
            winery,
            price,
            stock,
            alcohol,
            volume,
            image,
            year,
            province,
            region,
            url,
            rating,
            numOfReviews,
            reviews: [],
            description
        })

        res.send('Wine created succesfully!!');
    }
}

module.exports = { createWine };