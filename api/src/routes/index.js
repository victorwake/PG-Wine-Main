const { Router } = require('express');

const searchWineByIdRouter = require('./searchWineByIdRouter');
const getAllProvincesRouter = require('./getAllProvincesRouter');
const filterByProvinceRouter = require('./filterByProvinceRouter');
const createWineRouter = require('./createWineRouter');
const deleteWineRouter = require('./deleteWineRouter');
const updateWineRouter = require('./updateWineRouter');
const orderByPriceAscRouter = require('./orderByPriceAscRouter');
const orderByPriceDesRouter = require('./orderByPriceDesRouter');

const router = Router();

router.use('/', searchWineByIdRouter);
router.use('/', getAllProvincesRouter);
router.use('/', filterByProvinceRouter);
router.use('/', createWineRouter);
router.use('/', deleteWineRouter);
router.use('/', updateWineRouter);
router.use('/', orderByPriceAscRouter);
router.use('/', orderByPriceDesRouter);


module.exports = router;
