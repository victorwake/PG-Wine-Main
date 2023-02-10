const { Router } = require('express');
const router = Router();
const { getDetails } = require('../controllers/detailController.js')

router.get('/:id', getDetails)


module.exports = router;