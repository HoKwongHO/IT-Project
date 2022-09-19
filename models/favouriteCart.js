const mongoose = require("mongoose");


const favourCartSchema = new mongoose.schema({

   customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
   },

   products: [{
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    productName: {
        type: String,
        required: true,
    },
    category: {
        type: String, 
        enum: {
            value: ['drink', 'snack', 'fruit'],
            message: 'Enter Invalid Value', // Print error message.
        },
        img: {
            type: String,
            data: Buffer,
        },
        required: true,
    }
   }],

   recordDate: {
   type: String, 
   required: true
   },
},

{
    timestamps: { createdAt: "createTime", updatedAt: "updateTime" },
})

const favourCart = mongoose.model("favourCart", favourCart);
module.exports = favourCart;