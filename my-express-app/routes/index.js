var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/search', function(req, res, next) {
  const query = req.query.q?.toLowerCase();
  const products = ['Laptop', 'Smartphone', 'Headset', 'Keyboard', 'Monitor'];

  const results = products.filter(p => p.toLowerCase().includes(query));

  res.render('search-result', { query: req.query.q, results });
});

module.exports = router;

