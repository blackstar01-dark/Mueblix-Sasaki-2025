const express = require('express');
const db = require('./database/config');
const usuarioRouter = require('./routes/cliente')

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/cliente', usuarioRouter)

app.get('/', (req, res) => {
    res.send("Mi servidor en express")
})

app.listen(PORT, function() {
    console.log("Servidor corriendo en puerto: " + PORT)
})

