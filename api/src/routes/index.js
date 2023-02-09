const { Router } = require('express');
const generalRouter = require('./generalRouter.js');
const varietalRouter = require('./varietalRouter.js');
const detailRouter = require('./detailRouter.js');
const colorTypeRouter = require('./colorTypeRouter.js');
const login = require('./userLogin.js');
const createWineRouter = require('./createWineRouter');



const router = Router();

router.use('/home', generalRouter);
router.use('/varietal', varietalRouter);
router.use('/create', createWineRouter);
router.use('/winedetail', detailRouter);
router.use('/colortype', colorTypeRouter);
router.use('/auth', login);





module.exports = router;
