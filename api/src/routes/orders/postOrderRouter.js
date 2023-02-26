const { Router } = require('express');
const router = Router();
const { postOrder } = require ('../../controllers/orders/postOrders.js')

router.post('/post', postOrder)


module.exports = router;