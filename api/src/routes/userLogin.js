const { Router } = require('express');
const router = Router();
const { login } = require('../controllers/userLogin');

router.post('/login', login)


module.exports = router;