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

const { validarJWT } = require('../middlewares/validarJWT');



const router = Router();

router.use('/home', generalRouter);
router.use('/varietal', varietalRouter);
router.use('/details', detailRouter);
router.use('/vinos', colorTypeRouter);
router.use('/auth', login);
router.use('/', orderByPriceAscRouter);
router.use('/', createWineRouter);
router.use('/', updateWineRouter);
router.use('/usuarios', usuariosRouter);
router.use('/rutarestringida',[validarJWT], rutaRestringida)


module.exports = router;