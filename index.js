require('dotenv').config();
const express = require('express');

const cors = require('cors');
const { dbConecction } = require('./database/config');
// crea el servidor de express
const app = express();

// configuración de cors
app.use(cors());
// Lectura y parseo del body
app.use(express.json());

// DB
dbConecction();

// directorio publico

app.use(express.static('public'));
//routes

app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/hospitales', require('./routes/hospitales'));
app.use('/api/medicos', require('./routes/medicos'));
app.use('/api/todo', require('./routes/busquedas'));

app.use('/api/login', require('./routes/auth'));
app.use('/api/upload', require('./routes/uploads'));


app.listen(process.env.PORT,()=>{
  console.log('Escuchando el puerto: ',process.env.PORT);
})
