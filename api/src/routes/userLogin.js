const { Router } = require('express');
const { check } = require('express-validator');


///const { validarCampos } = require('../middlewares/validar-campos');


const { login } = require('../controllers/usuarios/userLogin');


const router = Router();

router.post('/',[
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),    
],login );


module.exports = router;