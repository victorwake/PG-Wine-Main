const { Router } = require('express');
const router = Router();
const { getExpType } = require('../controllers/expTypeController.js')

router.get('/:experience', getExpType)


module.exports = router;