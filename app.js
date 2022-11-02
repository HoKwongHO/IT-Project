const express = require("express")
const config = require("./config/index.js")
const app = express();
const mongoose = require("mongoose");
// const normalRouter = require("./routes/normalRouter");
const homeRouter = require("./routes/homeRouter");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
require("dotenv").config();
const passport = require('passport')
require('./passport')(passport);
const session = require("express-session")
const flash = require("express-flash")

app.use(session({
    secret: process.env.SESSION_SECRET || 'HONERS',
    resave: false,
    saveUninitialized: false,
    cookie: {
        sameSite: 'strict',
        httpOnly: true,
        secure: app.get('env') === 'production'
    }
}))

app.use(express.json());
app.use(express.urlencoded({extended : true}))

app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
if (app.get('env') === 'production') {
    app.set('trust proxy', 1); // Trust first proxy
    }



const connect = async function() {
    try {
        await mongoose.connect(config.mongoUrl);
        console.log("connection successfully");
    } catch (error) {
        console.log("connection failed");
    }
}

app.use(cors());
app.use(express.static(path.resolve(__dirname, '/public/front-end/build')));
app.use(bodyParser.json());
homeRouter(app);



//中间件 登陆，验证，跨域，权限


// app.use("/", (req, res)=> {
//     res.send("1");
// })

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(process.env.PORT||config.port,()=> {
    connect();

    console.log(`server is listening ${config.baseUrl}`)
})

app.use(express.static(path.join(__dirname, 'frontend/build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// if (process.env.NODE_ENV) {
//     app.use(express.static('frontend/build'))
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(process.cwd(), 'frontend/build/index.html'))
//       })
//   }