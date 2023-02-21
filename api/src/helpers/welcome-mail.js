"use strict";
const nodemailer = require("nodemailer");


const sendMail = async(firstName, lastName, email)  => {
 
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
    to: `${firstName}, ${email}`, // list of receivers
    subject: "Hola 🙂, bienvenido a Dionisio Wines ", // Subject line
    text: "Este es un mensaje de bienvenida", // plain text body
    html: `<div>Bienvenido <b>${firstName}</b></div>
           <div>Te haz registrado en Dionisio Wines</div>
           <div>Estos son tus datos de usuario:</div>
           <div><ul>
           <li>Nombre: ${firstName}</li>
           <li>Apellido: ${lastName}</li>
           <li>Email: ${email}</li>
           </ul></div>
           <div><p>Saludos del equipo de</p></div>
           <div><b>Dionisio Wines 🍷</b></div>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  
}

module.exports = {
  sendMail
};