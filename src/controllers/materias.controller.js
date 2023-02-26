const Estudiante = require("../Models/Estudiante");

exports.obtenerMaterias = async (req, res) => {
    try {
        if (req.params.idEst) {
            const idEst = req.params.idEst;
            const estudiante = await Estudiante.findById(idEst);
            res.json(estudiante.materias);
        } else {
            res.status(400).json({ error: "Debe enviar el id del estudiante" })
        }
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.agregarMateria = async (req, res) => {
    try {
        if (req.params.idEst && req.body) {
            const idEst = req.params.idEst;
            const materia = req.body;
            const estudiante = await Estudiante.findById(idEst);
            estudiante.materias.push(materia);
            await estudiante.save();
            res.json({ isOk: true });

        } else {
            res.status(400).json({ error: "Datos insuficientes" })
        }
    } catch (error) {
        res.status(500).json({ error })
    }
};

exports.eliminarMateria = async (req, res) => {
    try {
        if (req.params.idEst && req.params.idMat) {
            const idEst = req.params.idEst;
            const idMat = req.params.idMat;
            const estudiante = await Estudiante.findById(idEst);


            for (let index = 0; index < estudiante.materias.length; index++) {
                //console.log(estudiante.materias[index]);
                if (estudiante.materias[index]._id == idMat) {
                    estudiante.materias.splice(index, 1);
                }
            }
            await estudiante.save();
            res.json({ isOk: true });
        } else {
            res.status(400).json({ error: "Debe incluir el id del estudiante y materia a eliminar" });

        }
    } catch (error) {
        res.status(500).json({ error })
    }
}




exports.actualizar = async (req, res) => {
    try {
        if (req.params.idEst && req.params.idMat && req.body) {
            const idEst = req.params.idEst;
            const idMat = req.params.idMat;
            const data = req.body;
            const estudiante = await Estudiante.findById(idEst);

            for (let index = 0; index < estudiante.materias.length; index++) {
                if (estudiante.materias[index]._id == idMat) {
                    Object.assign(estudiante.materias[index], data);
                }

            }
            await estudiante.save();
            res.json({ isOk: true });

        } else {
            res.status(400).json({ error: "Debe enviar todos los datos" })
        }
    } catch (error) {
        res.status(500).json({ error: error, isOk: false })
    }
}