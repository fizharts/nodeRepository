
require('./config/config');


const mongoose = require('mongoose');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());

  app.use( require('./routes/usuarios') );

mongoose.connect('mongodb://localhost:27017/cafe', (err,res) => {

  if (err) throw err;

  console.log('base de datos online');
});


app.listen(process.env.PORT,() => {
  console.log('escuchando puerto 3000');
});
