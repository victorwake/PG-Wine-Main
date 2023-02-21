const { Cart } = require('../models/cartModel');

const { Wine } = require('../models/wineModel');

const { User } = require('../models/userModel');

const { Varietal } = require('../models/varietalModel');

const addCart = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;
        const wine = await Wine.findByPk(id);
        const user = await User.findByPk(req.user.id);
        const varietal = await Varietal.findByPk(wine.varietalId);
        const cart = await Cart.create({
            quantity,
            price: wine.price,
            total: wine.price * quantity,
            userId: user.id,
            wineId: wine.id,
            varietalId: varietal.id,
        });
        res.status(200).send(cart);
    } catch (err) {
        res.status(400).json({ error: err.msg });
    }
}

const getCart = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.user.id);
        const cart = await Cart.findAll({
            where: {
                userId: user.id,
            },
        });
        res.status(200).send(cart);
    } catch (err) {
        res.status(400).json({ error: err.msg });
    }
}

const deleteCart = async (req, res, next) => {
    try {
        const { id } = req.params;
        const cart = await Cart.findByPk(id);
        await cart.destroy();
        res.status(200).send('Cart deleted');
    } catch (err) {
        res.status(400).json({ error: err.msg });
    }
}

const updateCart = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;
        const cart = await Cart.findByPk(id);
        const wine = await Wine.findByPk(cart.wineId);
        await cart.update({
            quantity,
            total: quantity * wine.price,
        });
        res.status(200).send(cart);
    } catch (err) {
        res.status(400).json({ error: err.msg });
    }
}

module.exports = { addCart, getCart, deleteCart, updateCart };