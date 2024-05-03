const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vacanteSchema = new Schema({
    titulo: {
        type: String,
        required: true,
        maxlength: 100
    },
    descripcion: {
        type: String,
        required: true,
        maxlength: 500
    },
    categoria: {
        type: String,
        required: true,
        maxlength: 50
    },
    empresa: {
        type: String,
        required: true,
        maxlength: 50
    },
    ubicacion: {
        type: String,
        required: true,
        maxlength: 100
    },
    salario: {
        type: String,
        required: true,
        maxlength: 50
    },
    horario: {
        type: String,
        required: true,
        maxlength: 50
    },
    postulacion: {
        type: String,
        required: true,
        maxlength: 100
    },
    educacion: {
        type: String,
        required: true,
        maxlength: 50
    },
    tipo_trabajo: {
        type: String,
        required: true,
        maxlength: 50
    },
    requisitos: {
        type: String,
        required: true,
        maxlength: 500
    }
    
});

const Vacante = mongoose.model('Vacante', vacanteSchema);

module.exports = Vacante;
