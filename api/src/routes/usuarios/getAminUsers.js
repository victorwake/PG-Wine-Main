const { Router } = require('express');
const router = Router();
const { getAdmin } = require ('../../controllers/usuarios/getUsers')

router.get('/admin', getAdmin)


module.exports = router;