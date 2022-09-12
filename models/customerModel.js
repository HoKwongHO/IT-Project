const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;

var UserSchema = mongoose.Schema({
    nickname: {
        type: String,
        unique: false,
        default: `User_${Date.now()}`,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,

    },
});

UserSchema.pre("save", async function (next) { //存储数据之前将密码进行进行加密处理
    const user = this; // {username,password}
    if (!user.isModified("password")) {
      return next()
    }
    const salt = await bcrypt.genSalt(saltRounds); //使用bcrypt 模块进行数据加密
    const hash = bcrypt.hashSync(user.password, salt); //hash
    user.password = hash; //将加密后的数据复制给password
    return next()
  }) ///

  UserSchema.methods.validatePassword = function (password, callback) { //在model上挂载密码验证函数
    const user = this;
    //hash
    bcrypt.compare(password, user.password, (err, isMatch) => { //通过bcrypt的compare函数进行解密处理
      if (err) return callback(err);
      callback(null, isMatch);
    });
  };
 

const UserModel = mongoose.model("UserModel", UserSchema);
module.exports = UserModel;