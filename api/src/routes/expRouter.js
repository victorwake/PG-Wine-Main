const { Router } = require('express');
const router = Router();
const { getDbExp } = require ('../controllers/expController')




router.get('/', getDbExp)


module.exports = router;