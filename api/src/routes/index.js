const { Router } = require('express');
const router = Router();

const searchWineByIdRouter = require('./searchWineByIdRouter');
router.use('/', searchWineByIdRouter);
const getAllProvincesRouter = require('./getAllProvincesRouter');
router.use('/', getAllProvincesRouter);
const filterByProvinceRouter = require('./filterByProvinceRouter');
router.use('/', filterByProvinceRouter);
const createWineRouter = require('./createWineRouter');
router.use('/', createWineRouter);
const deleteWineRouter = require('./deleteWineRouter');
router.use('/', deleteWineRouter);
const updateWineRouter = require('./updateWineRouter');
router.use('/', updateWineRouter);
const orderByPriceAscRouter = require('./orderByPriceAscRouter');
router.use('/', orderByPriceAscRouter);
const orderByPriceDesRouter = require('./orderByPriceDesRouter');
router.use('/', orderByPriceDesRouter);
const randomWinesOfferRouter = require('./randomWinesOfferRouter');
router.use('/', randomWinesOfferRouter);


//Victor
const generalRouter = require('./generalRouter.js');
router.use('/home/home', generalRouter);
const varietalRouter = require('./varietalRouter.js');
router.use('/varietal/varietal', varietalRouter);
const detailRouter = require('./detailRouter.js');
router.use('/details', detailRouter);
const colorTypeRouter = require('./colorTypeRouter.js');
router.use('/vinos', colorTypeRouter);
const login = require('./userLogin.js');
router.use('/auth', login);





//Victor



module.exports = router;
