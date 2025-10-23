const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@${process.env.CLUSTER_NAME}.${process.env.CADENA_MONGO_NET}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a la base de datos'))
.catch((error) => console.error('Error en la conexion', error));
