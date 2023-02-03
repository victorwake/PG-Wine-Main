const { Router } = require('express');
const router = Router();
const { getAllProvinces } = require('../controllers/getAllProvincesController.js')

router.get('/provinces', getAllProvinces)


module.exports = router;