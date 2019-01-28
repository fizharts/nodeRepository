
require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());

app.get('/usuario',  (req, res) =>{
  res.send('Get usuario');
});

app.post('/usuario/:id', (req, res) => {
  let id = req.params.id;
  res.json({
    id
  });
});



app.post('/usuario', (req, res) => {
  let body = req.body;

if (body.nombre === undefined) {
    res.status(400).json({
      ok:false,
      mensaje: ' el nombre es necesario'
    });
}else{
  res.json({
    body
  });
}

});
app.put('/usuario', (req, res) => {
  res.send('Actualizar usuario');
});

app.listen(process.env.PORT,() => {
  console.log('escuchando puerto 3000');
});
