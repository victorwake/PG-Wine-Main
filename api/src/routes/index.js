const { Router } = require('express');

//Antonio Routes
const searchWineByIdRouter = require('./searchWineByIdRouter');
const getAllProvincesRouter = require('./getAllProvincesRouter');
const filterByProvinceRouter = require('./filterByProvinceRouter');
const createWineRouter = require('./createWineRouter');
const deleteWineRouter = require('./deleteWineRouter');
const updateWineRouter = require('./updateWineRouter');

const router = Router();

//Antonio Routes
router.use('/', searchWineByIdRouter);
router.use('/', getAllProvincesRouter);
router.use('/', filterByProvinceRouter);
router.use('/', createWineRouter);
router.use('/', deleteWineRouter);
router.use('/', updateWineRouter);


module.exports = router;
