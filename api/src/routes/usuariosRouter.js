const { Router } = require('express');
const router = Router();
const { usuariosPost } = require('../controllers/usuarios/usuariosController.js');

router.post('/crear', usuariosPost)


module.exports = router;