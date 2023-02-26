"use strict";
const nodemailer = require("nodemailer");


const sendMail = async(buyerName,
    payment_id,
    ammount,
    shipping_address,
    items,
    order_email)  => {
 
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_ACCOUNT,
     // pass: "svpimnbmyapiwrbl",
      pass: process.env.PASS_EMAIL_ACCOUNT

    },
    tls : {
        rejectUnauthorized: false,
    }
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Dionisio Wines 🍷 " <dionisiowinesshop@gmail.com>', // sender address
    to: `${buyerName}, ${order_email}`, // list of receivers
    subject:`Hola ${buyerName}, tu compra en Dionisio Wines fue un éxito`, // Subject line
    text: "Compra exitosa", // plain text body
    html: `<div>Hola de nuevo <b>${buyerName}</b></div>
           <div>Haz comprado exitosamente en Dionisio Wines</div>
           <div>Estos son tus datos de tu compra:</div>
           <div><ul>
           <li>Id de pago en mercado pago $${payment_id}</li>
           <li>El monto total de tu compra fue $${ammount}</li>
           <li>Datos de envio: ${shipping_address}</li>
           <li>Email: ${order_email}</li>
           </ul></div>
           <div><p>Saludos del equipo de</p></div>
           <div><b>Dionisio Wines 🍷</b></div>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  
}

module.exports = {
  sendMail
};