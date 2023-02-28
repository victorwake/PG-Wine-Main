const { Router } = require('express');
const generalRouter = require('./generalRouter.js');
const varietalRouter = require('./varietalRouter.js');
const detailRouter = require('./detailRouter.js');
const colorTypeRouter = require('./colorTypeRouter.js');
const orderByPriceAscRouter = require('./orderByPriceAscRouter')
const createWineRouter = require('./createWineRouter');
const updateWineRouter = require('./updateWineRouter');
const usuariosRouter = require('./usuariosRouter');
const login = require('./userLogin')
const rutaRestringida = require('./rutaRestringida')
const getAllUsers = require('../routes/usuarios/allUserRouter')
const getAdmin = require('../routes/usuarios/getAminUsers')
const getUser = require('../routes/usuarios/getUsers')
const google = require('../routes/usuarios/googleSingIn')
const favoriteRouter = require('../routes/favoriteRouter')
const procesarMP = require('../routes/mercadoPagoRouter')
const sucessMP = require('../routes/mercadoPagoSucess')
const postOrders = require('../routes/orders/postOrderRouter')
const getOrderByUser = require('../routes/orders/getOrdersByUser')
const { Router } = require("express");
const generalRouter = require("./generalRouter.js");
const varietalRouter = require("./varietalRouter.js");
const detailRouter = require("./detailRouter.js");
const colorTypeRouter = require("./colorTypeRouter.js");
const orderByPriceAscRouter = require("./orderByPriceAscRouter");
const createWineRouter = require("./createWineRouter");
const updateWineRouter = require("./updateWineRouter");
const usuariosRouter = require("./usuariosRouter");
const login = require("./userLogin");
const rutaRestringida = require("./rutaRestringida");
const getAllUsers = require("../routes/usuarios/allUserRouter");
const getAdmin = require("../routes/usuarios/getAminUsers");
const getUser = require("../routes/usuarios/getUsers");
const updateUser = require("../routes/usuarios/updateUserRoute"); //
const google = require("../routes/usuarios/googleSingIn");
const favoriteRouter = require("../routes/favoriteRouter");
const procesarMP = require("../routes/mercadoPagoRouter");
const sucessMP = require("../routes/mercadoPagoSucess");

const { validarJWT } = require('../../src/middlewares/validarJWT');
const createExpRouter = require("./createExpRouter");
const updateExpRouter = require("./updateExpRouter");
const expRouter = require("./expRouter.js");
const expTypeRouter = require("./expTypeRouter");
const { validarJWT } = require("../../src/middlewares/validarJWT");

const router = Router();

router.use('/home', generalRouter);
router.use('/varietal', varietalRouter);
router.use('/details', detailRouter);
router.use('/vinos', colorTypeRouter);
router.use('/auth', login);
router.use('/google', google);
router.use('/', orderByPriceAscRouter);
router.use('/', createWineRouter);
router.use('/', updateWineRouter);
router.use('/usuarios', usuariosRouter);
router.use('/usuarios', getAllUsers);
router.use('/usuarios', getAdmin);
router.use('/usuarios', getUser);
router.use('/usuarios', favoriteRouter);
router.use('/procesarmp', procesarMP);
router.use('/mpsucess', sucessMP);
router.use('/orders', postOrders);
router.use('/orders', getOrderByUser);
router.use('/rutarestringida',[validarJWT], rutaRestringida)
router.use("/home", generalRouter);
router.use("/varietal", varietalRouter);
router.use("/details", detailRouter);
router.use("/vinos", colorTypeRouter);
router.use("/auth", login);
router.use("/google", google);
router.use("/", orderByPriceAscRouter);
router.use("/", createWineRouter);
router.use("/", updateWineRouter);
router.use("/usuarios", usuariosRouter);
router.use("/usuarios", getAllUsers);
router.use("/usuarios", getAdmin);
router.use("/usuarios", getUser);
router.use("/usuarios", favoriteRouter);
router.use("/", updateUser);
router.use("/procesarmp", procesarMP);
router.use("/mpsucess", sucessMP);
router.use("/rutarestringida", [validarJWT], rutaRestringida);

router.use("/experiences", createExpRouter);
router.use("/experiences", updateExpRouter);
router.use("/experiences", expRouter);
router.use("/experiencias", expTypeRouter);

module.exports = router;
