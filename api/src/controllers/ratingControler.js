const {Wine, Rating } = require('../db.js');

const addRating = async (req, res) => {
    const wineId = req.params.wineId;
    const {stars} = req.body;

    try {
        const wine = await Wine.findByPk(wineId);
        if (!wine) {
            return res.status(404).json({ message: 'Vino no encontrado' });
        }

        const rating = await Rating.create({
            stars: stars
        });

        await wine.addRating(rating);

        return res.status(200).json(rating);
    } catch (error) {
        return res.status(500).json({ message: 'Error inesperado' });
    }
}

const getRating = async (req, res) => {
    const wineId = req.params.wineId;

    try {
        const wine = await Wine.findByPk(wineId);
        if (!wine) {
            return res.status(404).json({ message: 'Vino no encontrado' });
        }

        const ratings = await wine.getRatings();
            if (!ratings.length) {
        return res.status(200).json({ message: 'Este vino aún no tiene calificaciones' });
        }

        const totalStars = ratings.reduce((total, rating) => total + rating.stars.length, 0);
        const sumStars = ratings.reduce((sum, rating) => sum + rating.stars.reduce((total, star) => total + star, 0), 0);
        const averageStars = sumStars / totalStars;

        return res.status(200).json({ averageStars });
    }  catch (error) {
        return res.status(500).json({ message: 'Error inesperado' });
    }
};


module.exports = {
    addRating,
    getRating
}