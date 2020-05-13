const fs = require('fs');
const path = require('path');

//functtion that gets the file path where data is stored
const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product{
    constructor(t, imageUrl, description, price) {
        this.title = t;
        this.imageUrl = imageUrl
        this.description = description
        this.price = price
      }
    
      save() {
        this.id = Math.random().toString()
        getProductsFromFile(products => {
          products.push(this);
          fs.writeFile(p, JSON.stringify(products), err => {
            console.log(err);
          });
        });
      }
    
      static fetchAll(cb) {
        getProductsFromFile(cb);
      }
    
      static findById(id, cb){
        getProductsFromFile(products => {
          const product = products.find( p => p.id === id)
          cb(product)
        })
      }
}