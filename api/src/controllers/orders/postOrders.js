const { Order, User } = require("../../db.js");

const postOrder = async (req, res) => {
  const {
    idUser,
    payment_id,
    ammount,
    shipping_address,
    items,
    order_email,
    order_status,
  } = req.body;

  try {
    const buyer = await User.findOne({ where: {idUser: idUser}})
    console.log(buyer)

  if (!buyer) {
    res.status(401).json({ msg: 'Usuario no registrado en la base de datos'})
  }

  const order = await Order.create({
    payment_id: payment_id,
    ammount: ammount,
    shipping_address: shipping_address,
    items: items,
    order_email: order_email,
    order_status: order_status
  });

  await order.save();
  await buyer.addOrder(order)
  res.status(200).json(order);

    
  } catch (error) {
    console.log(error);
    
  }
  
};

module.exports = {
    postOrder
}
