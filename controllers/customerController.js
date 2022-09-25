const UserModel = require("../models/customerModel");
const DataModel = require("../models/productModel");
const bcrypt = require('bcrypt');
const saltRounds = 10;

//增删改查
const login = (req, res) =>{
    const {email, password } = req.body;
    UserModel.findOne({email}, (err, user)=>{
        if(err) {
            res.status(500).json({msg: "Server error!"});
        }
        else {
            //if exist
            if(user) {
                user.validatePassword(password, (err, isMatch)=> {
                    if(err) {res.status(500).json({msg: "Server error!"});}
                    else {
                        if(isMatch) {res.status(200).json({msg: "Welcome!"});}
                        else {res.status(200).json({msg: "Password doesn't match!"});}
                    }
                })
            }
            // Doesn't exist
            else {
                res.status(200).json({msg: "User doesn't exist!"});
            }
        }
    })
};

const createUser = (req, res)=> {
    const {nickname, email, password } = req.body;
    UserModel.findOne({email}, (err, result)=> {
        if (err) {
            res.status(500).json({msg:"Server error!"});
            
        }
        else {
            if (result) {
                res.status(200).json({msg: "User already existed!"});
            }
            else {
                new UserModel({nickname, email, password}).save((err, user)=>{
                    if (err) {
                        res.status(500).json({msg:"Server error!"});

                    }
                    else {
                        res.status(200).json({msg:"Registered!",user});
                    }
                });
            }
        }
    })
}

//Modify
const updateUser  = async (req, res) => {
    const input = req.body;
    const hash = await encrypt(input.password);
    UserModel.findOneAndUpdate({email:input.email}, {nickname:input.nickname, password: hash}, (err, result) => {
        if (err) {
            res.status(500).json({msg:"Server error!"});
        }
        else {
            res.status(200).json({msg:`Modified as nickname:${input.nickname}, password:${input.password}`, result});
        }
    })
}

const encrypt = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds); //使用bcrypt 模块进行数据加密
    const hash = bcrypt.hashSync(password, salt); //hash
    return hash;
}


const deleteUser = (req, res) => {
    const input = req.body;
    UserModel.findOneAndDelete ({email:input.email},(err, result) =>{
        if (err) {
            res.status(500).json({msg:"Server error!"});
        }
        else {
            res.status(200).json({msg:`Deleted`});
        }
    })
}

const getAllProducts= async (req,res) => {
    try{
        const products = await DataModel.find().lean()
        console.log(products);
        res.render('product_demo.hbs',
            {products:products, layout:"main"})
    }catch(err){
        console.log("error with displaying data: ", err)
    }
}
const searching = async(req, res) => {
    let payload = req.body.payload.trim();
    let search = await UserModel.find({email: {$regex: new RegExp('.*'+payload+'.*', 'i')}}).exec();
    res.send({payload: search});
}

const getSearch = (req, res) => {
    res.sendFile("/views/search-demo.html", {root: __dirname+"/.."});
};

const getUser = (req, res) => {
    res.sendFile("/views/index.html", {root: __dirname+"/.."});
};

//   const productInfo =  async (req, res) => {
//     const product = await DataModel.findById(req.params._id).lean();
//     res.render('patient_info',{clinicianName: cli.name, patient: patient, layout:"demo"});
//   };

// const searchInfo =  async (req,res) => {
//     try{

//     }catch(err){
//         console.log("Fail to search: ",err)
//     }
// };

module.exports = {
    createUser,
    login,
    updateUser,
    deleteUser,
    getAllProducts,
    searching,
    getSearch,
    getUser
    //productInfo
}