const { Router } = require('express');
const router = Router();
const { removeStock, addStock } = require('../controllers/stockController.js')

router.put('/:id/stock/:stock', removeStock)
router.put('/:id/stock/add/:stock', addStock)

module.exports = router;