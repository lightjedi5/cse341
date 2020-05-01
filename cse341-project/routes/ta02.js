//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();
const userArray = []


router.post('/addUser', (req, res, next) => {
    userArray.push(req.body.add)
    res.redirect('/ta02/')
})

router.post('/removeUser', (req, res, next) => {
    const rem = req.body.remove
    console.log(userArray)
    console.log(rem)
    const index = userArray.indexOf(rem)
    console.log(index)
    userArray.splice(index, 1)
    res.redirect('/ta02/')
})

router.get('/',(req, res, next) => {
    res.render('pages/ta02', { 
        title: 'Team Activity 02', 
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        userArr: userArray
    });
});

module.exports = router;