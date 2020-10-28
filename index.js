//importar las librerias...
const express = require('express');
//desestructurando, solo se trae lo que se necesita
const { dbconection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

//console.log('Hola babosa');
//usuario: userCuzco
//password: OkVh0aBPMK2vlKOm
//string de coneccion: mongodb+srv://userCuzco:<password>@cluster0.usv34.mongodb.net/test
//CODIGO PARA DESPLEGAR EL SERVIDOR

const server = express();

//configurando cors
//inn.. a todas las lineas hacia abajo
server.use(cors());

//PRIMERA PETICION GET
server.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Desplegando el primer servicio REST'
    });
});

dbconection();

//console.log(process.env);

server.listen(process.env.PORT, () => {
    console.log('El servidor se esta ejecutando en el puerto: ' + 3000)
    console.log('Cuzco Ramos Manuel Edilberto')
});