const path=require('path');

const rootDir=require('../util/path.js');

const Product=require('../models/product');

exports.getAddProduct=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
}

exports.postAddProduct=(req,res,next)=>{
    const product=new Product(req.body.title);
    product.save();
    res.redirect('/shop');
}

exports.getShop=(req,res,next)=>{
    Product.fetchAll();
    res.sendFile(path.join(rootDir,'views','shop.html'));
}



