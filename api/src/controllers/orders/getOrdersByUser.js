const { Order, User } = require("../../db.js");

const getOrders = async (req, res) => {
  const { id } = req.params;
  try {
    const ordenes = await Order.findAll({ where: { idUser: id } });
    const ordenesTotales = await ordenes.length;
    await res.status(200).json({
      ordenesTotales: ordenesTotales,
      ordenes: ordenes,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getOrders,
};
