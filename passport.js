const LocalStrategy = require('passport-local').Strategy
const bcrypt = require("bcrypt");

// import staff and customer models
const Staff = require('./models/staffModel');
const Customer = require('./models/customerModel');
const process = require('process')



module.exports = (passport) => {

  // Store user information
  passport.serializeUser((user, done)=>{
   // customer.permission = "customer"
    done(null, {_id: user._id, role: user.role})
  });

  passport.deserializeUser((user, done) => {
    if(user.role === "customer"){
      Customer.findById(user._id, (err, customer)=>{
        return done(err, customer)
    })
    }else if(user.role === "staff"){
      Staff.findById(user._id, (err, staff)=>{
        return done(err, staff)
      })
    }else{
      return done("This user have no authority to log in", null)
    }
  })




// For customer login
  passport.use(
    "customer_login",
    new LocalStrategy({
      usernameField: "userID",
      passwordField: "password",
      passReqToCallback: true
    },
    (req, userID, password, done) => {
      process.nextTick(()=>{
        Customer.findOne({'email': userID}, async(err, customer)=>{
          if(err){
            return done(err)
             
          }else if(!customer){
            return done(null, false, req.flash('loginMessage', 'Can not find a user.'))
          }
          // Check password
          customer.verifyPassword(password,(err, valid) =>{
            if(err){
              return done(err)
            }
            if(!valid){
              return done(null, false,  req.flash('loginMessage', 'Incorrect Password'))
            }
            // If user and password all correct
            req.session.userID = userID
            return done(null, customer, req.flash('loginMessage', 'Log In Successfully'))
          })
    
          
        })
      })
    })
    
  )
// For staff login
  passport.use(
    "staff_login",
    new LocalStrategy({
      usernameField: "userID",
      passwordField: "password",
      passReqToCallback: true
    },
    (req, userID, password, done) => {
      process.nextTick(()=>{
        Doctor.findOne({'email': userID}, async(err, staff)=>{
          if(err){
            return done(err)
          }
        
          if(!staff){
            return done(null, false, req.flash('loginMessage', 'Can not find a user.'))
          }else if (!await bcrypt.compare(password, staff.password)){
            return done(null, false, req.flash('loginMessage', 'incorrect password.'))
          }else{
            req.session.userID = userID
            return done(null, staff, req.flash('loginMessage', 'Login successful'));
          }
    
          
        })
      })
    })
  )


}