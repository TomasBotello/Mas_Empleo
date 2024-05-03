const express = require('express');
const router = express.Router();
const Vacante = require('../models/vacante'); // Asegúrate de importar el modelo Vacante correctamente

// Ruta para mostrar una vacante específica
router.get('/vacante', async (req, res) => {
  try {
    // Aquí deberías obtener la información de la vacante que deseas mostrar
    // Puedes obtenerla de la base de datos, por ejemplo
    const vacante = await Vacante.findOne({ /* condición para obtener la vacante */ });

    // Renderiza la vista 'vacante.ejs' y pasa la información de la vacante como datos
    res.render('vacante.ejs', { vacante });
  } catch (error) {
    console.error(error);s
    res.status(500).send('Error interno del servidor');
  }
});

module.exports = router;
