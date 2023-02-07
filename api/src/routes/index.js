const { Router } = require('express');
const router = Router();

//Antonio
const searchWineByIdRouter = require('./searchWineByIdRouter');
const getAllProvincesRouter = require('./getAllProvincesRouter');
const filterByProvinceRouter = require('./filterByProvinceRouter');
const createWineRouter = require('./createWineRouter');
const deleteWineRouter = require('./deleteWineRouter');
const updateWineRouter = require('./updateWineRouter');
const orderByPriceAscRouter = require('./orderByPriceAscRouter');
const orderByPriceDesRouter = require('./orderByPriceDesRouter');
const randomWinesOfferRouter = require('./randomWinesOfferRouter');

router.use('/', searchWineByIdRouter);
router.use('/', getAllProvincesRouter);
router.use('/', filterByProvinceRouter);
router.use('/', createWineRouter);
router.use('/', deleteWineRouter);
router.use('/', updateWineRouter);
router.use('/', orderByPriceAscRouter);
router.use('/', orderByPriceDesRouter);
router.use('/', randomWinesOfferRouter);

//Victor
const generalRouter = require('./generalRouter.js');
const varietalRouter = require('./varietalRouter.js');
const detailRouter = require('./detailRouter.js');
const colorTypeRouter = require('./colorTypeRouter.js');
const login = require('./userLogin.js');

router.use('/home', generalRouter);
router.use('/varietal', varietalRouter);
router.use('/details', detailRouter);
router.use('/vinos', colorTypeRouter);
router.use('/auth', login);




//Victor



module.exports = router;
