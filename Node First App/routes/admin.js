const path=require('path');
const express=require('express');

const rootDir=require('../util/path.js');

const router=express.Router();

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
})

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');
})

router.get('/contactusform',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactusform.html'));
})

router.post('/success',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactussubmit.html'));
})

module.exports=router;