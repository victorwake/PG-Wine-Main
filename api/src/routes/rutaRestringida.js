const { Router } = require('express');
const router = Router();

router.get('/', function(req, res) {
    res.send('Lograste entrar!!! :✈ ');
  })


module.exports = router;