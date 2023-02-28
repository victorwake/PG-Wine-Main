const { Order, User } = require("../../db.js");
const { sendMail } = require('../../helpers/compra-sucess-mail');

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
    const buyerName = buyer.firstName;
    const payId = await Order.findOne({ where: {payment_id: payment_id}})

  if (!buyer || payId) {
    res.status(401).json({ msg: 'Existe un problema con la solicitud'})
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
  
  await sendMail(buyerName,
    payment_id,
    ammount,
    shipping_address,
    items,
    order_email);

  } catch (error) {
    console.log(error);
    
  }
  
};

module.exports = {
    postOrder
}