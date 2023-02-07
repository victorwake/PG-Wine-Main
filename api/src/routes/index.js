const { Router } = require('express');
const generalRouter = require('./generalRouter.js');
const varietalRouter = require('./varietalRouter.js');
const detailRouter = require('./detailRouter.js');
const colorTypeRouter = require('./colorTypeRouter.js');
const orderByPriceAscRouter = require('./orderByPriceAscRouter')
const createWineRouter = require('./createWineRouter');

const login = require('./userLogin.js')



const router = Router();

router.use('/home', generalRouter);
router.use('/varietal', varietalRouter);
router.use('/details', detailRouter);
router.use('/vinos', colorTypeRouter);
router.use('/auth', login);
router.use('/', orderByPriceAscRouter);
router.use('/', createWineRouter);


module.exports = router;