
const { Router } = require('express');
const router = Router();
const { getColourType } = require('../controllers/colourTypeController.js')

router.get('/:type', getColourType)


module.exports = router;