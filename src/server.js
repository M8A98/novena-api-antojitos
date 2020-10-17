// Definición del  servidor

const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'antojitos API'
  })
})

module.exports = app
