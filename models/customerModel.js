const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;

var customerSchema = mongoose.Schema({
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
  },
  {
      timestamps: { createdAt: "createTime", updatedAt: "updateTime" },
});

customerSchema.pre("save", async function (next) { // Hash the password before saving to database
    const customer = this; // {username,password}
    if (!customer.isModified("password")) {
      return next()
    }
    const salt = await bcrypt.genSalt(saltRounds); // use bcrypt to encrypt the data
    const hash = bcrypt.hashSync(customer.password, salt); // hash the password
    customer.password = hash; // save the hash to the password 
    return next()
  }) 

  customerSchema.methods.validatePassword = function (password, callback) { //在model上挂载密码验证函数
    const customer = this;
    //hash
    bcrypt.compare(password, customer.password, (err, isMatch) => { //通过bcrypt的compare函数进行解密处理
      if (err) return callback(err);
      callback(null, isMatch);
    });
  };
 

const CustomerModel = mongoose.model("CustomerModel", customerSchema);
module.exports = CustomerModel;