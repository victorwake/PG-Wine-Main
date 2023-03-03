const winesJson = require("../data/winesDb.json");
const { Wine } = require("../db.js");

const insertWine = async () => {
  winesJson.forEach((winesApi) => {
    Wine.create({
      name: winesApi.name,
      varietal: winesApi.varietal,
      color_type: winesApi.color_type,
      winery: winesApi.winery,
      price: winesApi.price,
      image: winesApi.image,
      stock: winesApi.stock,
      year: winesApi.year,
      stock: winesApi.stock,
      province: winesApi.province,
      region: winesApi.region,
      alcohol: winesApi.alcohol,
      volume: winesApi.volume,
      url: winesApi.url,
      description: winesApi.description,
      rating: winesApi.rating,
      numOfReviews: winesApi.numOfReviews,
    });
  });
  console.log("wines loaded in the db");
};

module.exports = { insertWine };
