const UserModel = require("../models/user.model");
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
    const {email, password } = req.body;
    UserModel.findOne({email}, (err, result)=> {
        if (err) {
            res.status(500).json({msg:"Server error!"});
        }
        else {
            if (result) {
                res.status(200).json({msg: "User already existed!"});
            }
            else {
                new UserModel({email, password}).save((err, user)=>{
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

module.exports = {
    createUser,
    login,
    updateUser,
    deleteUser
}