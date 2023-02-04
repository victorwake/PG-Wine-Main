const { Router } = require('express');
const router = Router();
const { orderByPriceDes } = require('../controllers/orderByPriceDesController.js')

router.get('/orderDes/price', orderByPriceDes)


module.exports = router;