const { Router } = require('express');
const router = Router();
const { getWineryList } = require('../controllers/wineryListController')

router.get('/', getWineryList)


module.exports = router;