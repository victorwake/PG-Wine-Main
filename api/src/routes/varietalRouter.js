const { Router } = require('express');
const router = Router();
const { getDbVarietal } = require('../controllers/varietalControllers.js');

router.get('/', getDbVarietal);

module.exports = router;