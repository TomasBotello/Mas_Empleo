const express = require('express');
const router = express.Router();
const Vacante = require('../models/vacante'); // Asegúrate de importar el modelo Vacante correctamente

// Ruta para mostrar todas las vacantes
router.get('/vacante', async (req, res) => {
  try {
    const vacante = await Vacante.find();
    res.render('vacante.ejs', { 
      vacante,
      loggedIn: req.session.token ? true : false // Verifica si hay una sesión activa
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
});



module.exports = router;
