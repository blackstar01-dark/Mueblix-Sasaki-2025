const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombres: String,
    apellidos: String,
    estado_usuario: String,
    telefono: Number,
    fecha_nacimiento: Date,
    correo: String,
    contrasena: String,
    foto: String, 
});

module.exports = mongoose.model('Usuario', usuarioSchema)