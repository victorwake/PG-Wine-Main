const { Router } = require('express');
const router = Router();
const { getUser } = require ('../../controllers/usuarios/getUsers')

router.get('/user', getUser)


module.exports = router;