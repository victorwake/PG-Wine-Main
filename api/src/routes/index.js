const { Router } = require('express');
const generalRouter = require('./generalRouter.js');
const varietalRouter = require('./varietalRouter.js');



const router = Router();

router.use('/general', generalRouter);
router.use('/varietal', varietalRouter);


module.exports = router;
