const mongoose = require("mongoose");

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: number,
    required: true,
  },
  productPicture: {
    data: Buffer,
    contentType: String,
    required: true,
  },
  productCatogory: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
  },
  createdAt: { type: Date, immutable: true, default: () => Date.now() },
  updateAt: { type: Date, default: () => Date.now() },
=======
=======
>>>>>>> parent of 5c64864 (staff schema and controller, product controller)

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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 5c64864 (staff schema and controller, product c


const DataModel = mongoose.model("DataModel", DataSchema);
module.exports = DataModel;