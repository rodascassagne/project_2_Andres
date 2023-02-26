const express = require("express");
const morgan = require("morgan");
const conexionDB = require("./db.conexion");
const routerEstudiantes = require("./routes/estudiantes.routes");
const routerMaterias = require("./routes/materias.routes");
const routerProfesores = require("./routes/profesores.routes");
const fileupload = require("express-fileupload");
const app = express();
require("dotenv").config();

// conexion a la base de datos
conexionDB();

// settings
app.set("name", "rest-api-for teachers and students to insert grade, comment and courses");
app.set("port", process.env.port || 3000);


//middleware
app.use(express.json());
app.use(morgan("common"));
app.use(fileupload({
    createParentPath: true
}))




// llamado de rutas
app.use(express.static("public"));   // esta linea reemplaza el mensaje que habia antes, es para imprimir el html en http://localhost:3500/
app.use("/api/estudiantes", routerEstudiantes);
app.use("/api/materias", routerMaterias);
app.use("/api/profesores", routerProfesores);


module.exports = app;