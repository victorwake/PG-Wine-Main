const { Router } = require('express');
const { check } = require('express-validator');


///const { validarCampos } = require('../middlewares/validar-campos');


const { googleSignin } = require('../../controllers/usuarios/userLogin');


const router = Router();

router.post('/',[
    check('correo', 'El correo es obligatorio').isEmail(),
    check('id_token', 'El id_token es necesario').not().isEmpty(),    
], googleSignin );

module.exports = router;