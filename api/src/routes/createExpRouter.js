const { Router } = require('express');
const router = Router();
const { createExp } = require('../controllers/createExpController.js')

router.post('/experiences', createExp)


module.exports = router;