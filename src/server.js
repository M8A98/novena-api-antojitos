// Definición del  servidor

const express = require('express')

const tacosRouter = require('./routes/tacos')

const app = express()

app.use(express.json())

app.use('/tacos', tacosRouter)

app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'antojitos API'
  })
})

module.exports = app

// cada que quiero crear un endpoint nuevo, el proceso es:
// 1.- Ir desde el centro hacia afuera en el círculo. Asegurar los modelos(acceso a datos)
// 2.- Crear el(los) caso de uso necesarios para esa acción
// 3.- Crear nuestro endpoint y conectarlo al (o los) casos de uso correspondientes
