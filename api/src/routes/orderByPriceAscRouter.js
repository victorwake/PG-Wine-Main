const { Router } = require('express');
const router = Router();
const { orderByPriceAsc } = require('../controllers/orderByPriceAscController.js')

router.get('/wine', orderByPriceAsc)


module.exports = router;