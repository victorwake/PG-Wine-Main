const { Router } = require('express');
const router = Router();
const { updateExp} = require('../controllers/updateExpController.js')

router.put('/experiences/:id', updateExp)


module.exports = router;