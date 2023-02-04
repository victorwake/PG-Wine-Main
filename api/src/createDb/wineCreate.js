const winesJson  = require('../data/winesDb.json');
const { Wine } = require('../db.js');

const insertWine = async () => {
    winesJson.forEach(el => {
        Wine.create({
            name: el.name,
            varietal: el.varietal,
            colour_type: el.colour_type,
            winery: el.winery,
            price: el.price,
            image: el.image,
            price: el.price,
            stock: el.stock,
            year: el.year,
            stock: el.stock,
            province: el.province,
            region: el.region,
            alcohol: el.alcohol,
            volume: el.volume,
            url: el.url,
            description: el.description,
        });
    });
    console.log('wines loaded in the db');  
}

module.exports = {insertWine}