const productModel = require("../models/productModel");
const multer = require("multer");

const Storage = multer.diskStorage({
  destination: "public/uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: Storage,
}).single("picture");
const createProduct = (req, res) => {
  const input = req.body;
  productModel.findOne({ name: input.name }, (err, result) => {
    if (err) {
      res.status(500).json({ msg: "Server error!" });
    } else {
      if (result) {
        res.status(200).json({ msg: "Product already existed!" });
      } else {
        upload(req, res, (err) => {
          if (err) {
            res.status(500).json({ msg: "Server error!" });
          } else {
            const newProduct = new productModel({
              name: input.name,
              price: input.price,
              storage: input.storage,
              category: input.category,
              description: input.description,
              createAt: input.createdAt,
              updateAt: input.updateAt,
              picture: {
                data: req.file.filename,
                contentType: "image/png",
              },
              picdir: "./public/uploads/" + req.file.originalname,
            });
            newProduct
              .save()
              .then(() => res.status(200).json({ msg: "Product registered!" }))
              .catch((err) => res.status(500).json({ msg: "Server error!" }));
          }
        });
      }
    }
  });
};

//Modify
const updateProduct = async (req, res) => {
  const input = req.body;
  productModel.findOneAndUpdate(
    { name: input.name },
    { price: input.price },
    {
      picture: {
        data: req.file.filename,
        contentType: "image/png",
      },
    },
    { picdir: "./public/uploads/" + req.file.originalname },
    { storage: input.storage },
    { category: input.category },
    { description: input.description },

    (err, result) => {
      if (err) {
        res.status(500).json({ msg: "Server error!" });
      } else {
        res.status(200).json({
          msg: `Successfully modified the product:${input.name},`,
          result,
        });
      }
    }
  );
};

//Delet product

const deleteProduct = (req, res) => {
  const input = req.body;
  productModel.findOneAndDelete(
    { name: input.name },
    { price: input.price },
    (err, result) => {
      if (err) {
        res.status(500).json({ msg: "Server error!" });
      } else {
        res.status(200).json({ msg: "Product Deleted" });
      }
    }
  );
};
