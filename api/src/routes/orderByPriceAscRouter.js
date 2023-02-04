const { Router } = require('express');
const router = Router();
const { orderByPriceAsc } = require('../controllers/orderByPriceAscController.js')

router.get('/orderAsc/price', orderByPriceAsc)


module.exports = router;