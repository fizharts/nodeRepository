const express = require('express');
const Usuario = require('../models/usuario');
const app = express();

const bcrypt = require('bcryptjs');



app.get('/usuario',  (req, res) =>{
  res.send('Get usuario dos');
});

app.post('/usuario/:id', (req, res) => {
  let id = req.params.id;
  res.json({
    id
  });
});

app.delete('/usuario', (req, res) => {

  res.send('borrar usuario');
})



app.post('/usuario', (req, res) => {
  let body = req.body;

  let usuario = new Usuario({
    nombre:body.nombre,
    email:body.email,
    password:bcrypt.hashSync(body.password,10),
    role: body.role


  });

  usuario.save( (err, usuarioDB)=> {
    if (err) {
      return  res.status(400).json({
          ok:false,
          err
        });
    }else{
      usuarioDB.password = null;
      res.json({
        ok:true,
        usuario: usuarioDB
      });
    }




  });


});






app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;

    res.json({
      id
    });
})


module.exports = app;
