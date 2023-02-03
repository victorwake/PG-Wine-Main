const { Router } = require('express');
const generalRouter = require('./generalRouter.js');
const varietalRouter = require('./varietalRouter.js');
<<<<<<< HEAD
=======
const detailRouter = require('./detailRouter.js');
const colourTypeRouter = require('./colourTypeRouter.js');
const login = require('./userLogin.js')
>>>>>>> 6cc14e96a2bdc8bca49c3ba2522317a92fdf2eb3



const router = Router();

router.use('/general', generalRouter);
router.use('/varietal', varietalRouter);
<<<<<<< HEAD
=======
router.use('/winedetail', detailRouter);
router.use('/colourtype', colourTypeRouter);
router.use('/auth', login);
>>>>>>> 6cc14e96a2bdc8bca49c3ba2522317a92fdf2eb3


module.exports = router;
