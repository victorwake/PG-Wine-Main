const { Router } = require('express');
const router = Router();
const { getExpDetails } = require('../controllers/expDetailController.js')

router.get('/:id', getExpDetails)


module.exports = router;