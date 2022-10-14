const mongoose = require("mongoose");

// Use itemSchema to store the information about product
let itemSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }
    //productName: {
    //    type: String,
     //   required: true,
    //}
}, {
    timestamps: true,
})

// Each customer will have a favourites cart which stores a list of products
const favourCartSchema = mongoose.Schema({

   customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
   },

   items: [itemSchema],

},{
    timestamps: { createdAt: "createTime", updatedAt: "updateTime" },
})

const favourCart = mongoose.model("favourCart", favourCartSchema);
module.exports = favourCart;