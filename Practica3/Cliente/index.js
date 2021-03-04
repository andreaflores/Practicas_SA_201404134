const express = require('express')
const app = express()
const morgan = require('morgan');
const cors = require('cors');
const API_CONFIG_PUERTO = 8090

app.use(cors())

app.use(morgan('dev'))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from Cliente!!")
})

app.use('/cliente', require('./Routes/ClienteRoutes'));

//Inicio del servidor --> localhost:8090
app.listen(API_CONFIG_PUERTO, () => {
    console.log("Cliente corriendo en el puerto:" + API_CONFIG_PUERTO)
})

module.exports.API_CONFIG_PUERTO = API_CONFIG_PUERTO;