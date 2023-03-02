const { Router } = require('express');
const router = Router();
const { updateExp} = require('../controllers/updateExpController.js')

router.put('/experiences/:id', updateExp)   //Esta ruta se modificó para q acceda directamente


module.exports = router;