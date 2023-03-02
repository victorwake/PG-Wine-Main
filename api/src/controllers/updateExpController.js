const { Experiences } = require('../db');

const updateExp = async(req, res) => {
    const idUpdateExp = req.params.id;

    let {
        name,
        price,
        ubication,
        kindOfExp,
        image,
        url,
        description,
        eventDate,
    } = req.body;

    if (!name || !price || !ubication || !kindOfExp || !eventDate ||!image || !url || !description) {
        res.status(500).send('Complete all required fields');
    } else if (price < 0) {
        res.status(500).send('Negative numbers are not allowed');
    } else {
        await Experiences.update({
            name,
            price,
            ubication,
            kindOfExp,
            image,
            url,
            description,
            eventDate,
        }, {
            where: { id: idUpdateExp }
        });

        res.send('Experience modified succesfully!!');
    }
}

module.exports = { updateExp };