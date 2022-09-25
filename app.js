const express = require("express")
const config = require("./config/index.js")
const app = express();
const mongoose = require("mongoose");
// const normalRouter = require("./routes/normalRouter");
const homeRouter = require("./routes/homeRouter");
const bodyParser = require("body-parser");
const cors = require("cors");



const connect = async function() {
    try {
        await mongoose.connect(config.mongoUrl);
        console.log("connection successfully");
    } catch (error) {
        console.log("connection failed");
    }
}

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
homeRouter(app);




//中间件 登陆，验证，跨域，权限


// app.use("/", (req, res)=> {
//     res.send("1");
// })


app.listen(config.port,()=> {
    connect();

    console.log(`server is listening ${config.baseUrl}`)
})

