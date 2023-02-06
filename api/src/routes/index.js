const { Router } = require('express');
const generalRouter = require('./generalRouter.js');
const varietalRouter = require('./varietalRouter.js');
const detailRouter = require('./detailRouter.js');
const colourTypeRouter = require('./colourTypeRouter.js');
const wineryRouter = require('./wineryRouter.js');
const wineryListRouter = require('./wineryListRouter.js');
<<<<<<< HEAD
const typeWineListRouter = require('./typeListRouter.js');
=======
>>>>>>> adf19d32e6d5837eecf8e3a9bbded53b956a6597
const login = require('./userLogin.js')

const router = Router();

router.use('/general', generalRouter);
router.use('/varietal', varietalRouter);
router.use('/winedetail', detailRouter);
router.use('/colourtype', colourTypeRouter);
router.use('/winery', wineryRouter);
router.use('/listwinery', wineryListRouter);
<<<<<<< HEAD
router.use('/listype', typeWineListRouter)
=======
>>>>>>> adf19d32e6d5837eecf8e3a9bbded53b956a6597
router.use('/auth', login);


module.exports = router;