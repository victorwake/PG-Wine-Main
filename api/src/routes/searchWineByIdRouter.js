const { Router } = require('express');
const router = Router();
const { searchWineById } = require('../controllers/searchWineByIdController.js')

router.get('/wines/:id', searchWineById)


module.exports = router;