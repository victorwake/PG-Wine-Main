const expJson = require('../data/expDb.json');
const {Experiences } = require('../db.js');

const insertExp = async () => {
  const promises = expJson.map(expApi => {
    return Experiences.create({
      name: expApi.name,
      price: expApi.price,
      ubication: expApi.ubication,
      kindOfExp: expApi.kindOfExp,
      description: expApi.description,
      eventDate: expApi.eventDate,
      image: expApi.image,
      url: expApi.url,
    });
  });

  await Promise.all(promises);

  console.log('experiences loaded in the db');
};

module.exports = { insertExp };