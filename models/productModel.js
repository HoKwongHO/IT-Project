const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  picture: {
    data: Buffer,
    contentType: String,
    required: true,
  },
  storage: {
    type: Number,
    required: true,
  },
  catogory: {
    type: String,
    required: true,
  },
  description: {
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
