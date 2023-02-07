const { Router } = require('express');
const router = Router();
const { getAllProvinces } = require('../controllers/getAllProvincesController.js')

router.get('/wine/provinces', getAllProvinces)


module.exports = router;