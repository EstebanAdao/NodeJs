var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/tabuada/:valor', (req, res, next) => {
  //res.render('index', { title: 'Express' });
  var valor = req.params.valor;
  var resultado = (valor % 2) == 0 ? valor : false;
  res.render('tabuada', {
    numero: resultado
  })
});

module.exports = router;
