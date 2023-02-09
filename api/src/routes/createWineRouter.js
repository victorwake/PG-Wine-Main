const { Router } = require('express');
const router = Router();
const { createWine } = require('../controllers/createWineController.js')

router.post('/', createWine)


module.exports = router;