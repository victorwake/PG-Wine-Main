
const { Router } = require('express');
const router = Router();
const { getColorType } = require('../controllers/colorTypeController.js')

router.get('/:type', getColorType)


module.exports = router;