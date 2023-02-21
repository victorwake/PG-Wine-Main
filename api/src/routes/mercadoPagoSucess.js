const { Router } = require('express');
const router = Router();

router.get('/', function(req, res) {
    res.status(200).json({
         msg: "Transacción exitosa"
    })
  })


module.exports = router;