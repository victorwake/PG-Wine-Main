
// SDK de Mercado Pago
const mercadopago = require("mercadopago");

// Agrega credenciales
mercadopago.configure({
  access_token: process.env.PROD_ACCESS_TOKEN,
});

const procesarMP = (req, res) => {
    const items = req.body
        
// Crea un objeto de preferencia
let preference = {
    items: items,
    back_urls: {
        "success": "http://localhost:3001/feedback",
        "failure": "http://localhost:3001/feedback",
        "pending": "http://localhost:3001/feedback"
    },
    auto_return: "approved",
  };
  
  mercadopago.preferences
    .create(preference)
    .then(function (response) {
        res.json({
            id: response.body
        });
    })
    .catch(function (error) {
      console.log(error);
    });
}

module.exports = {
    procesarMP
}