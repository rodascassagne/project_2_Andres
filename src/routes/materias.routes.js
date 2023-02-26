const { Router } = require("express");
const ctrMeterias = require("../controllers/materias.controller");
const routeMaterias = Router();

routeMaterias.get("/:idEst", ctrMeterias.obtenerMaterias);

routeMaterias.post("/:idEst", ctrMeterias.agregarMateria);

routeMaterias.delete("/:idEst/:idMat", ctrMeterias.eliminarMateria);

routeMaterias.put("/:idEst/:idMat", ctrMeterias.actualizar);

module.exports = routeMaterias;