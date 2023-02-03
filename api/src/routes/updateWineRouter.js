const { Router } = require('express');
const router = Router();
const { updateWine } = require('../controllers/updateWineController.js')

router.put('/wines/:id', updateWine)


module.exports = router;