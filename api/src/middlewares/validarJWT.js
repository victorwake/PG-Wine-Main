const jwt = require("jsonwebtoken");

const { User } = require("../../src/db");

const validarJWT = async(req, res, next) => {
    const token = req.header("x-token");

    if (!token) {
        return res.status(401).json({
            msg: "No hay token en la petición",
        });
    }

    try {
        const { idUser } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        console.log(idUser);
        const usuario = await User.findOne({ where: { idUser: idUser } });
        console.log(usuario);
        if (!usuario) {
            return res.status(401).json({
                msg: "Token no válido - usuario no existe en DB",
            });
        }

        //verificar si el uid tiene estado del user
        if (usuario.status !== "active") {
            return res.status(401).json({
                msg: "Token no válido - usuario con estado: false",
            });
        }

        req.usuario = usuario;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: "Token no valido",
        });
    }
};

module.exports = {
    validarJWT,
};