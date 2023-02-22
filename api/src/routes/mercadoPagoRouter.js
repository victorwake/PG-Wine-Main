const { Router } = require('express');
const router = Router();
const { procesarMP } = require ('../controllers/mercadoPagoController')




router.post('/', procesarMP)


module.exports = router;