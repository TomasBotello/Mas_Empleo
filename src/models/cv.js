const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const curriculumSchema = new Schema({
    nombre: String,
    carrera: String,
    educacion: String,
    experiencia: String,
    habilidades: String,
});

module.exports = mongoose.model('Curriculum', curriculumSchema);