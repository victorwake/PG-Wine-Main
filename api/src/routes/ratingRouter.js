const { Router } = require('express');
const router = Router();
const { addRating, getRating } = require('../controllers/ratingControler.js')


router.post('/:wineId/rating', addRating)
router.get('/:wineId/rating', getRating)

module.exports = router;