const Usuario = require('../../model/cliente');

async function indexUsuario(req, res) {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios)
    } catch (error) {
        res.status(400).json({ mensaje: error})
    }
}

async function showUsuario(req, res) {
    try {
        const id = req.params.id;
        const usuarios = await Usuario.findById(id)
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(400).json({mensaje: 'Error en la consulta'})
    }
}

module.exports = { indexUsuario, showUsuario}