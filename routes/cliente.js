const express = require('express');
const router = express.Router();
const usuarioController = require('../app/controller/cliente');

router.get('/', usuarioController.indexUsuario);

router.get('/:id', usuarioController.showUsuario);



module.exports = router;