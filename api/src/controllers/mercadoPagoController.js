// SDK de Mercado Pago
const mercadopago = require("mercadopago");

// Agrega credenciales
mercadopago.configure({
  access_token: process.env.PROD_ACCESS_TOKEN,
});

const procesarMP = (req, res) => {
  const items = req.body;
  

  if (!items || items.length === 0) {
    // Si no hay productos en el carrito, devuelve un error
    return res.status(400).json({ error: 'No se encontraron productos en el carrito.' });
  }

// Crea un objeto de preferencia
let preference = {
  items: items.map((item) => {
    return {
      id: item.id,
      title: item.title,
      unit_price: item.unit_price,
      quantity: item.quantity,
    };
  }),
  back_urls: {
    success: 'http://localhost:3001/mpsucess',
    failure: 'http://localhost:3001/feedback',
    pending: 'http://localhost:3001/feedback',
  },
  auto_return: 'approved',
};
mercadopago.preferences
  .create(preference)
  .then(function (response) {
    res.json({
      id: response.body,
    });
  })
  .catch(function (error) {
    console.log(error);
  });
};
module.exports = {
    procesarMP
}