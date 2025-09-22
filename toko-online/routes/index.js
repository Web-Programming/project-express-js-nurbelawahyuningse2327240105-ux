var express = require('express');
var router = express.Router();
var router = require("../data/products.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Toko Online Sederhana', products: products });
});

module.exports = router;
