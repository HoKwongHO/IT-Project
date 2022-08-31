const mongoose = require("mongoose");

var DataSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    productPrice: {
        type: String,
        required: true,
    },
    productPicture: {
        type: Buffer,
        required: true,
    },
    productDescription: {
        type: String,
    },
});


const UserModel = mongoose.model("UserModel", UserSchema);
module.exports = UserModel;