const { Router } = require('express');
const generalRouter = require('./generalRouter.js');
const varietalRouter = require('./varietalRouter.js');
const detailRouter = require('./detailRouter.js');
const whiteRouter = require('./colourTypeRouter.js');



const router = Router();

router.use('/general', generalRouter);
router.use('/varietal', varietalRouter);
router.use('/winedetail', detailRouter);
router.use('/colourtype', whiteRouter);


module.exports = router;
