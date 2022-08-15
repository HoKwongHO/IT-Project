
// Import express 
const express = require('express') 
// Set your app up as an express app 
const path = require('path')
const app = express() 
// Tells the app to send the string: "Our demo app is working!" when you hit the '/' endpoint. 
app.use(express.static('public')) // define where static assetslive
const exphbs = require('express-handlebars') // include Handlebars module
app.engine('hbs', exphbs.engine({      // configure Handlebars 
    defaultlayout: false, 
    extname: 'hbs' 
})) 
 
app.set('view engine', 'hbs')   // set Handlebars view engine

app.get('/client', (req, res) => { 
    res.send('this is the client page') 
}); 



// Tells the app to listen on port 3000 and logs that information to the console. 
app.listen(3000, () => { 
    console.log('>our demo app is working! http://localhost:3000') 
});

const homeRouter = require('./routes/homeRouter.js')
app.use('/', homeRouter)