const { Router } = require('express');
const router = Router();
const { orderByPriceDes } = require('../controllers/orderByPriceDesController.js')

router.get('/orderDes/price/:min/:max', orderByPriceDes)


module.exports = router;