const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('users', userSchema) // users es el nombre de la colección que debe haber en la base de datos. Si no la hay, mongoose la va a crear.