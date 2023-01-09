const fs=require('fs');
const { builtinModules } = require('module');
const path=require('path');
const rootDir=require('../util/path');

const p=path.join(rootDir,'data','cart.json');

module.exports=class Cart {
    static addProduct(id,prodPrice){
        fs.readFile(p,(err,fileContent)=>{
            let cart={products:[],totalPrice:0};
            //Checking if cart is not empty;
            if(!err){
                cart=JSON.parse(fileContent);
            }
            // Checking if the product is existing in cart or not
            const idx=cart.products.findIndex(prod=>prod.id===id);
            if (idx>=0){    
                // product is existing : increse its qty;            
                cart.products[idx].qty += 1;
            }// product is not existing
            else{
                cart.products.push({ id: id, qty: 1 });                    
            }
            console.log(prodPrice);
            cart.totalPrice=cart.totalPrice+(+prodPrice);
            fs.writeFile(p,JSON.stringify(cart),err=>{
                console.log(err);
            })            
        })
    }

    static deleteProduct(id,prodPrice){
        fs.readFile(p,(err,fileContent)=>{
            if(err){
                return;
            }
            const cart=JSON.parse(fileContent);
            const product=cart.products.find(prod=>prod.id===id);
            if(!product){
                return;
            }
            const productQty=product.qty;
            const updatedProducts=cart.products.filter(prod=>prod.id!==id);
            cart.products=[...updatedProducts];
            cart.totalPrice-=productQty*prodPrice;
            fs.writeFile(p,JSON.stringify(cart),err=>{
                console.log(err);
            })
        })
    }

    static getCart(cb){
        fs.readFile(p,(err,fileContent)=>{
            if(err){
                cb(null);
            }
            else{
                const cart = JSON.parse(fileContent);
                cb(cart);
            }
        })
    }
}