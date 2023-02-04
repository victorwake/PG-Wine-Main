const { Router } = require('express');
const router = Router();
const { getTypeList } = require('../controllers/typeWineListController')

router.get('/', getTypeList)


module.exports = router;