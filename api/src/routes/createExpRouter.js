const { Router } = require('express');
const router = Router();
const { createExp } = require('../controllers/createExpController.js')

router.post('/', createExp)


module.exports = router;