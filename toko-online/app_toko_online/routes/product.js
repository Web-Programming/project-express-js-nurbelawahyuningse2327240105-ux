var express = require ("express");
var router = express.Router();
var products = require("../../data/products.json");

router.get("/:id", function(reg,res,next){
    const productId = parseInt(req, params.id); //Tangkap ID dr URL
    const product = products.find(p => p.id == productId);

    if (!product){ //jika produk tidak ditemukan S
        return res.status(404).send('Produk tidak ditemukan!');
    }

    res.render('product-detail',
        {
            title : product.name,
            product : product
        }
    );

});
module.exports = router;