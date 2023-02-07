const { Router } = require('express');
const router = Router();
const { createWine } = require('../controllers/createWineController')

router.post('/wines', createWine)


module.exports = router;