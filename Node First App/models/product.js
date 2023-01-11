const Cart=require('./cart');
const db=require('../util/database');
const { getProducts } = require('../controllers/admin');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    db.execute('INSERT INTO products(title,price,description,imageUrl) VALUES (?,?,?,?)',
    [this.title,this.price,this.description,this.imageUrl]);
  }

  update(){
    return db.execute('UPDATE products SET title=?,price=?,description=?,imageUrl=? WHERE products.id=?',
    [this.title,this.price,this.description,this.imageUrl,this.id]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE products.id=?',[id] );
  }

  static deleteById(id){
    return db.execute('DELETE FROM products WHERE products.id=?',[id]);

    // getProductsFromFile(products=>{
    //   const product = products.find(prod => prod.id === id);
    //   const updatedProducts=products.filter(prod=>prod.id!==id);
    //   fs.writeFile(p,JSON.stringify(updatedProducts),err=>{
    //     if(!err){
    //       Cart.deleteProduct(id,product.price);            
    //     }
    //   })
    // })
  }
};


