const { Router } = require('express');
const router = Router();

router.get('/', function(req, res) {
    res.send('✔ Pago procesado con éxito');
  })


module.exports = router;