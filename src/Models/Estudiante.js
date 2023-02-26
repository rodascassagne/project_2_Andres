const { Schema, model } = require("mongoose");

const EstudianteSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        default: true
    },
    nombreExpediente: {
        type: String,
        required: true
    },
    materias: [
        {
            nota: Number,
            nombre: String,
            comentario: String
        }
    ]

});

module.exports = model("Estudiante", EstudianteSchema);
