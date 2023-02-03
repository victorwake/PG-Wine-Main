const { Router } = require('express');
const router = Router();
const { filterWinesByProvince } = require('../controllers/filterByProvinceController')

router.get('/:province', filterWinesByProvince)


module.exports = router;