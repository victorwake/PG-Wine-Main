const { Router } = require('express');
const generalRouter = require('./generalRouter.js');
const varietalRouter = require('./varietalRouter.js');
const detailRouter = require('./detailRouter.js');
const colorTypeRouter = require('./colorTypeRouter.js');
const orderByPriceAscRouter = require('./orderByPriceAscRouter')
const createWineRouter = require('./createWineRouter');
const updateWineRouter = require('./updateWineRouter');
const usuariosRouter = require('./usuariosRouter');
const login = require('./userLogin')
const rutaRestringida = require('./rutaRestringida')
const getAllUsers = require('../routes/usuarios/allUserRouter')
const getAdmin = require('../routes/usuarios/getAminUsers')
const getUser = require('../routes/usuarios/getUsers')
const google = require('../routes/usuarios/googleSingIn')

const { validarJWT } = require('../../src/middlewares/validarJWT');

const router = Router();

router.use('/home', generalRouter);
router.use('/varietal', varietalRouter);
router.use('/details', detailRouter);
router.use('/vinos', colorTypeRouter);
router.use('/auth', login);
router.use('/google', google);
router.use('/', orderByPriceAscRouter);
router.use('/', createWineRouter);
router.use('/', updateWineRouter);
router.use('/usuarios', usuariosRouter);
router.use('/usuarios', getAllUsers);
router.use('/usuarios', getAdmin);
router.use('/usuarios', getUser);
router.use('/rutarestringida',[validarJWT], rutaRestringida)


module.exports = router;