const bcryptjs = require('bcryptjs')

const {
    User
} = require("../../db.js");

const { generarJWT } = require('../../helpers/generar-jwt');
const { googleVerify } = require('../../helpers/google-verify');



const login = async(req, res) => {

    const { email, password } = req.body;

    try {
      
        // Verificar si el email existe
        const usuario = await User.findOne({ where: { email: email } });
        if ( !usuario ) {
            return res.status(400).json({
                msg: 'Email no está registrado en Diosinio Wines'
            });
        }

        // SI el usuario está activo
        if ( usuario.status !== "active" ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: false'
            });
        }

        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync( password, usuario.password );
        if ( !validPassword ) {
            return res.status(400).json({
                msg: 'Password no es correcto'
            });
        }

        // Generar el JWT
        const token = await generarJWT( usuario.idUser );

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


const googleSignin = async(req, res) => {

    const { id_token } = req.body;
    
    try {
        const { email, nombre, apellido } = await googleVerify( id_token );

        let usuario = await User.findOne({where: {email: email}})

        if ( !usuario ) {
            // Tengo que crearlo
            const data = {
                nombre,
                apellido,
                correo,
                password: ':P',
                rol: "USER_ROLE",
                google: true
            };

            usuario = new User( data );
            await usuario.save();
        }

        // Si el usuario en DB
        if ( usuario.status !== 'active' ) {
            return res.status(401).json({
                msg: 'Hable con el administrador, usuario bloqueado'
            });
        }

        // Generar el JWT
        const token = await generarJWT( usuario.idUser );
        
        res.json({
            usuario,
            token
        });
        
    } catch (error) {

        res.status(400).json({
            msg: 'Token de Google no es válido'
        })

    }
}

module.exports = {
    login,
    googleSignin
}
