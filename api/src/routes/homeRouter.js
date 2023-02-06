const { Router } = require('express');
const router = Router();
const { getDbWines } = require('../controllers/generalControllers')




router.get('/', getDbWines)


module.exports = router;