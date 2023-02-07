const { Router } = require('express');
const router = Router();
const { filterWinesByProvince } = require('../controllers/filterByProvinceController')

router.get('/wines', filterWinesByProvince)


module.exports = router;