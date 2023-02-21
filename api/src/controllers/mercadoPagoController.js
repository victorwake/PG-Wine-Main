// SDK de Mercado Pago
const mercadopago = require("mercadopago");
require('dotenv').config()



// Agrega credenciales
mercadopago.configure({
  access_token: process.env.PROD_ACCESS_TOKEN,
});

const procesarMP = (req, res) => {
    const items = req.body


// Crea un objeto de preferencia
let preference = {
    items: [{ items
      // id: items.id,
      // category_id:'art',
      // title: items.title,
      // unit_price: items.price,
      // description: items.description,
      // quantity: items.quantity,
    }],
    back_urls: {
        "success": "http://localhost:3001/mpsucess",
        "failure": "",
        "pending": "",
    },
    auto_return: "approved",
    binary_mode: true
  };

  mercadopago.preferences
  .create(preference).then((response)=> res.status(200).send({response})
  .catch(error=>res.status(400).send({error: error.message})))
}

module.exports = {
    procesarMP
}