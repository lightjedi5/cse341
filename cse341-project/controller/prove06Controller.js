const { validationResult } = require('express-validator/check')

exports.validate = (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword
    const error = validationResult(req)
    console.log('in signUp')
    if (!error.isEmpty()) {
        return res.render('pages/prove06',
            {title: 'Prove 06', path: '/pages/prove06',
            formsCSS: true,
            productCSS: true,
            activeAddProduct: true,
            errorMessage: error.array()[0].msg
            })
    }
    else {  
        res.render('pages/prove06',
        {title: 'Prove 06', path: '/pages/prove06',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true,
        errorMessage: null
        })
    }
}