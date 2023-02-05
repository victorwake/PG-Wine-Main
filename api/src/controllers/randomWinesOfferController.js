const { Wine } = require("../db.js");

const randomWinesOffer = async (req, res) => {
    const allWines = await Wine.findAll();
    let offer = [];

    for(let i = 0; i < 10; i++) {
      offer.push(allWines[Math.floor(Math.random() * 100)])
    }
      offer.forEach(el => el.price = el.price * .9);
      res.send(offer); 
};

module.exports = { randomWinesOffer };