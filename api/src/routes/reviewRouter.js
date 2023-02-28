const { Router } = require('express');
const router = Router();
const { addReviewToWine, removeReviewToWine, getReviewWines } = require('../controllers/reviewControllers.js')

router.post('/:userId/reviews/:wineId', addReviewToWine)
router.delete('/:userId/reviews/:wineId', removeReviewToWine)
router.get('/:userId/reviews', getReviewWines)
router.put('/:userId/reviews/:wineId', addReviewToWine)
module.exports = router;