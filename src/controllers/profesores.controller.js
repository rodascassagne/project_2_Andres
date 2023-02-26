const Profesor = require("../Models/Profesor");
const jwt = require("jsonwebtoken");

exports.registrar = async (req, res) => {
    try {
        const { correo, clave } = req.body;
        if (correo && clave) {
            const nuevoProfesor = new Profesor({ correo, clave });
            await nuevoProfesor.save();
            res.json({ isOk: true, id: nuevoProfesor._id });
        } else {
            res.json({ error: "Faltan datos requeridos" });
        }
    } catch (error) {
        res.json({ error });
    }
};

exports.login = async (req, res) => {
    try {
        const { correo, clave } = req.body;
        if (correo && clave) {
            const profesor = await Profesor.findOne({ correo });
            if (!profesor) {
                res.json({ token: null, msj: "usuario o contraseña icorrectas" });
            } else {
                if (profesor.clave == clave) {
                    const { _id, correo } = profesor;
                    const opt = {
                        expiresIn: '2h'
                    }
                    const palabra = "es-muy-secreta" ////////////////esto deberia estar en una variable de entorno .env
                    const token = jwt.sign({ _id, correo }, palabra, opt)
                    res.json({ token });
                } else {
                    // no coincide la clave
                    res.json({ token: null, msj: "usuario o contraseña icorrectas" });
                }
            }

        } else {
            res.json({ error: "Faltan datos requeridos" });
        }
    } catch (error) {
        res.json({ error });
    }
}