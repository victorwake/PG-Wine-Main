const { response } = require('express')

const {
    User
} = require("../../db.js");

const { generarJWT } = require('../../helpers/generar-jwt');

const login = async(req, res) => {

    const { email, password } = req.body;

    try {

        // Verificar si el email existe
        const usuario = await User.findOne({ where: { email: email } });
        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo'
            });
        }

        // SI el usuario está activo
        if (usuario.status !== "active") {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: false'
            });
        }

        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            });
        }

        // Generar el JWT
        const token = await generarJWT(usuario.idUser);

        res.json({
            usuario,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}


module.exports = {
    login
}