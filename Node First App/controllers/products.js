const path=require('path');

const rootDir=require('../util/path.js');

exports.getAddProduct=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
}

exports.postAddProduct=(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');
}

exports.getShop=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
}


