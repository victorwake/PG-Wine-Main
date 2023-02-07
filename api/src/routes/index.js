const { Router } = require('express');
const homeRouter = require('./homeRouter.js');
const varietalRouter = require('./varietalRouter.js');
const detailRouter = require('./detailRouter.js');
const colorTypeRouter = require('./colorTypeRouter.js');
const wineryRouter = require('./wineryRouter.js');
const wineryListRouter = require('./wineryListRouter.js');
const login = require('./userLogin.js')

const router = Router();

router.use('/home', homeRouter);
router.use('/varietal', varietalRouter);
router.use('/winedetail', detailRouter);
router.use('/colortype', colorTypeRouter);
router.use('/winery', wineryRouter);
router.use('/listwinery', wineryListRouter);
router.use('/auth', login);


module.exports = router;
