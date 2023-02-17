const expJson = require('../data/expDb.json');
const {Experiences } = require('../db.js');

const insertExp= async() => {
    expJson.forEach(expApi => {
        Experiences.create({
            name: expApi.name,
            price: expApi.price,
            ubication: expApi.ubication,
            kindeOfExp: expApi.kindeOfExp,
            description: expApi.description,
            eventDate: expApi.eventDate,
            image: expApi.image,
            url: expApi.url,
        });
    });
    console.log('experiences loaded in the db');
}

module.exports = { insertExp }