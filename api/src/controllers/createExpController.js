const { Experiences } = require('../db');

const createExp = async(req, res) => {
    let {
        name,
        price,
        ubication,
        kindOfExp,
        image,
        url,
        description,
        eventDate,
        duration,
        resenia
    } = req.body;

    if (!name || !price || !ubication || !kindOfExp || !eventDate || !duration || !resenia|| !image || !url || !description) {
        res.status(500).send('Complete all required fields');
    } else if (price < 0 || duration < 0) {
        res.status(500).send('Negative numbers are not allowed');
    } else {
        await Experiences.create({
            name,
            price,
            ubication,
            kindOfExp,
            image,
            url,
            description,
            eventDate,
            duration
        })

        res.send('Experience created succesfully!!');
    }
}

module.exports = { createExp };