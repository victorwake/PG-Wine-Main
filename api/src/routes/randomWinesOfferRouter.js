const { Router } = require('express');
const router = Router();
const { randomWinesOffer } = require('../controllers/randomWinesOfferController.js')

router.get('/offer/random', randomWinesOffer)


module.exports = router;