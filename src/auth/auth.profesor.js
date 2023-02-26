
/// esto es un middleware

const Profesor = require("../Models/Profesor");
const jwt = require("jsonwebtoken");

const autorizarProfesor = async (req, res, next) => {
    const strToken = req.headers.authorization;
    if (!strToken) {
        return res.json({ msj: "No se encontro el token" });
    }
    try {
        const token = strToken.split(" ")[1];
        const palabra = "es-muy-secreta"
        const llave = jwt.verify(token, palabra); //// con esto se desencripta la llave
        const profesor = await Profesor.findById(llave._id);
        if (!profesor) {
            return res.json({ msj: "usuario no encontrado" });
        }
    } catch (error) {
        return res.json({ error });
    }




    next();
}
module.exports = autorizarProfesor;