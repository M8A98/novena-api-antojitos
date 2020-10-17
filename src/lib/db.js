const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB, NAME
  } = process.env
  
  //protocolo://user:passord@host/dbname
  
  const url = ` mongodb+src://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
  
  const mongoose = require('mongoose')
  const url = ''
  function connect () {
    return mongoose.connect(
      url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })
  }
  
  module.exports = {
    connect
  }
  