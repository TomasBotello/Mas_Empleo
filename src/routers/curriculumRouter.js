// Importa express
const express = require('express');
const helmet = require('helmet'); // Importa Helmet para establecer encabezados de seguridad

// Crea una nueva aplicación de express
const app = express();

// Importa el enrutador principal
const mainRouter = require('./routes/index.js');

// Importa el enrutador del curriculum
const curriculumRouter = require('./routes/curriculumRouter.js');

// Usa Helmet para establecer encabezados de seguridad
app.use(helmet());

// Usa el enrutador principal
app.use('/', mainRouter);

// Usa el enrutador del curriculum
app.use('/curriculum', curriculumRouter); // Prefix curriculum routes with '/curriculum'

// Inicia el servidor
app.listen(5000, () => {
    console.log('Servidor iniciado en el puerto 5000');
});