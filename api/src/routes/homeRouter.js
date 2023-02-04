const { Router } = require('express');
const router = Router();
const { getDbWines } = require ('../controllers/homeControllers')




router.get('/', getDbWines)


module.exports = router;