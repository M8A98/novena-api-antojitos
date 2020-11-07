const Users = require('../models/users')
//Aquí se resuelve la pregunta ¿Qué acciones hace el usuario?
const bcrypt = require('../lib/bcrypt')

const jwt = require('../lib/jwt')
// signup

async function signup(email,password){
    const user = await Users.findOne({email})

    if(user){throw new Error('User is already registered')}

    const hash = bcrypt.hash(password) // nos regresa el hash encriptado
    return Users.create({email,password:hash}) // es :hash porque le delcaramos que el password es ese
}

async function login (email,password){
    const user = await Users.findOne({email}) // user es un objeto que recibe tanto el email como el password

    if(!user){ throw new Error('Invalid data')}

    const isValidPassword = bcrypt.compare(password,user.password)
    if(!isValidPassword) throw new Error('Invalid data')

    return jwt.create({id:user._id}) //defines que en el payload el id va a ser el id del usuario
}

function getAll(){
    return Users.find()
}

//login

module.exports={
    signup,
    getAll,
    login
}