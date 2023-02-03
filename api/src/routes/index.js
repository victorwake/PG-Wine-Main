const { Router } = require('express');
const generalRouter = require('./generalRouter.js');
const varietalRouter = require('./varietalRouter.js');
const detailRouter = require('./detailRouter.js');
const colourTypeRouter = require('./colourTypeRouter.js');
const wineryRouter = require('./wineryRouter.js');
const login = require('./userLogin.js')

const router = Router();

router.use('/general', generalRouter);
router.use('/varietal', varietalRouter);
router.use('/winedetail', detailRouter);
router.use('/colourtype', colourTypeRouter);
router.use('/winery', wineryRouter);
router.use('/auth', login);


module.exports = router;
