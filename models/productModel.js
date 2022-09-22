const mongoose = require("mongoose");

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
});

productSchema.pre("save", function (next) {
  this.updateAt = Date.now();
  //throw new errot("fail save")
  next();
});

module.exports = mongoose.model("productModel", productSchema);
