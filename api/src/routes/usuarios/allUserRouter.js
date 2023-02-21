const { Router } = require('express');
const router = Router();
const { getDbUsers } = require ('../../controllers/usuarios/getUsers')

router.get('/all', getDbUsers)


module.exports = router;