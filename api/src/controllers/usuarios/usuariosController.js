const { User } = require("../../db.js");
const bcryptjs = require('bcryptjs');

const usuariosPost = async(req, res ) => {
    
    const { userName, email, firstName, lastName, cellphone, profilePic, password} = req.body;
    const usuario = await User.create({ userName:userName, email:email, firstName:firstName, lastName:lastName, cellphone:cellphone, profilePic:profilePic, password:password });

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );

    // Guardar en BD
    await usuario.save();

    res.json({
        usuario
    });
}
module.exports = {
        usuariosPost
    }