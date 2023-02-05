const { Router } = require('express');
const router = Router();
const { orderByPriceAsc } = require('../controllers/orderByPriceAscController.js')

router.get('/orderAsc/price/:min/:max', orderByPriceAsc)


module.exports = router;