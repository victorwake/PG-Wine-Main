const {
    User
} = require("../../db.js");
const bcryptjs = require('bcryptjs');

const { generarJWT } = require('../../helpers/generar-jwt');

const usuariosPost = async (req, res, next) => {

    const {
        userName,
        email,
        firstName,
        lastName,
        cellphone,
        profilePic,
        password
    } = req.body;

    const searchUserDb = await User.findOne({where: {email: email}})
    
    try {
        if (searchUserDb) {
            return res.status(400).json({
                msg: 'Email ya está siendo utilizado. Intenta nuevamente con otro email.'
        });
    }
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
        return res.send(error)

    }
}
module.exports = {
    usuariosPost
}