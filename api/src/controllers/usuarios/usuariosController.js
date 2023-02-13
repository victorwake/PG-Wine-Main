const {
    User
} = require("../../db.js");
const bcryptjs = require('bcryptjs');

const { generarJWT } = require('../../helpers/generar-jwt');

const usuariosPost = async (req, res) => {

    const {
        userName,
        email,
        firstName,
        lastName,
        cellphone,
        profilePic,
        password
    } = req.body;

    try {
    const usuario = await User.create({
        userName: userName,
        email: email,
        firstName: firstName,
        lastName: lastName,
        cellphone: cellphone,
        profilePic: profilePic,
        password: password
    });

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    // Guardar en BD
    await usuario.save();

    res.json({
        usuario,
        msg: "Nuevo usuario registrado con éxito"
    });
    console.log(usuario)

} catch (error) {
        console.log(error)

    }
}
module.exports = {
    usuariosPost
}