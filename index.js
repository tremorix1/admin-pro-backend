require('dotenv').config();
const express = require('express');

const cors = require('cors');
const { dbConecction } = require('./database/config');
// crea el servidor de express
const app = express();

// configuración de cors
app.use(cors());

// DB
dbConecction();

app.get('/',(req,res)=>{
  res.json({
    ok: true,
    msg: 'Hola Mundo'
  })
})
app.listen(process.env.PORT,()=>{
  console.log('Escuchando el puerto: ',process.env.PORT);
})
