const express = require('express');
const { isLoggedIn } = require('../middlewares/isLoggedIn');
const router = express.Router();
const productModel = require('../models/product_model');

router.get('/', (req, res) => {
    res.render("index", { error: [] });
});

router.get('/shop',isLoggedIn,async (req,res)=>{
    const products = await productModel.find();
    res.render("shop",{products});
})
module.exports = router;