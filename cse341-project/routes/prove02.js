const express = require('express')
const router = express.Router()
const books = []

router.get('/', (req, res, next) => {
    res.render('pages/prove02', {title: 'Add Book', path: '/admin/add-product', b: books})
});
  
 
router.post('/add-product', (req, res, next) => {
  books.push({ title: req.body.title, summary: req.body.summary})
  res.redirect('/prove02');
});

router.get('/', (req, res, next) => {
    res.render('pages/prove02', { 
        title: 'Prove 02', 
        path: '/prove02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        b: books
    });
})

module.exports = router