var products = require('../../data/products.json');

const index = (req, res ) => {
    res.render ('index',{
        title : "Toko Online Sederhana",
        products: product
});

}
module.exports = {index};