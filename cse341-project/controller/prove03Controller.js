const Product = require('../Model/prove03');
//there was a typo that broke the above line
exports.getAddProduct = (req, res, next) => {
    res.render('pages/prove03', {
      pageTitle: 'Add Product',
      prods: product,
      path: '/pages/prove03',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };
  
  exports.postAddProduct = (req, res, next) => {
    const imageUrl = req.body.imageURL
    const title = req.body.title
    const descrip = req.body.description
    const price = req.body.price
    const product = new Product(title, imageUrl, descrip, price);
    
    product.save();
    res.redirect('/');
  };
  
  exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('pages/prove03', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    });
  }

exports.getProduct = (req, res, next) => {
  const proId = req.params.productId
  Product.findById(proId, product => {
    res.render('pages/prove03-detail', {product: product, pageTitle: product.title, path: '/products'})
  })
  //res.redirect('/')

};