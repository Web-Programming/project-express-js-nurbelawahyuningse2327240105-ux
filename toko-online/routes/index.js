var express = require('express');
var router = express.Router();
var router = require("../data/products.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Toko Online Sederhana', products: products });
});


router.get('/search', function(req, res, next) {
  const query = req.query.q ? req.query.q.toLowerCase() : '';
  
  const products = ['Laptop', 'Headset', 'Keyboard', 'Monitor', 'Mouse'];

  const results = query
    ? products.filter(product => product.toLowerCase().includes(query))
    : products;

  res.render('search-result', { query: req.query.q, results });
});


module.exports = router;



