const { Router } = require('express');
const router = Router();
const { orderByPriceDes } = require('../controllers/orderByPriceDesController.js')

router.get('/win', orderByPriceDes)


module.exports = router;