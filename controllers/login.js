//const passport = require("../passport");

function unLoginCustomer(req, res, next){
    
    if(req.isAuthenticated()){
        if(req.user.role === "customer"){
            return res.redirect('/all-product')
        }
    }
    next();
}

function isLoginCustomer(req, res, next){
    if(req.isAuthenticated()){
        if(req.user.role === "customer"){
            return next();
        }
       
    }
    res.redirect('/login')
}

function unLoginStaff(req, res, next){
    if(req.isAuthenticated()){
        if(req.user.role === "staff"){

            return res.redirect('/profile')
        }
       
    }
    next();
}

function isLoginStaff(req, res, next){
    if(req.isAuthenticated()){
        if(req.user.role === "staff"){
            return next();
        }
    }
    res.redirect('/staffLogin')
}

module.exports = {
    unLoginCustomer,
    isLoginCustomer,
    unLoginStaff,
    isLoginStaff
}