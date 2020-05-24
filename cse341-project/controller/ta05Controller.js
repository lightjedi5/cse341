const Product = require('../Model/ta05');

exports.decrement = (req, res, next) => {
    req.session.counter -= 1;
    res.redirect('/ta05');
}

exports.increment = (req, res, next) => {
    req.session.counter += 1;
    res.redirect('/ta05');
}

exports.changeColor = (req, res, next) => {
    req.session.style = req.body.styling_choice;
    res.redirect('/ta05');
}

exports.init = (req, res, next) => {
    if (req.session.style == undefined) {
        req.session.style = 0;
    }
    if (req.session.counter == undefined) {
        req.session.counter = 0;
    }
    res.render('pages/ta05', {
        title: 'TA 05',
        path: '/ta05',
        style: req.session.style,
        counter: req.session.counter
    });
}

exports.delSession = (req, res, next) => {
    req.session.destroy(err => {
        if(err){
            console.log(err)
        }
    res.redirect('/ta05')
    })
}