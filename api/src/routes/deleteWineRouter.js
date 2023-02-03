const { Router } = require('express');
const router = Router();
const { deleteWine } = require('../controllers/deleteWineController.js')

router.delete('/wines/:id', deleteWine)


module.exports = router;