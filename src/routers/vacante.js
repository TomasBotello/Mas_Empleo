const express = require('express');
const router = express.Router();
const Vacante = require('../models/vacante');

// Ruta para mostrar todas las vacantes
router.get('/', async (req, res) => {
  try {
    const vacantes = await Vacante.find();
    res.render('vacante.ejs', { 
      vacantes,
      loggedIn: req.session.token ? true : false
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
});

// Ruta para eliminar una vacante usando GET para simplificar
router.get('/eliminar/:id', async (req, res) => {
  try {
    const result = await Vacante.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).send('Vacante no encontrada');
    }
    res.redirect('/vacante');
  } catch (error) {
    console.error('Error al eliminar la vacante:', error);
    res.status(500).send('Error interno del servidor');
  }
});

module.exports = router;
