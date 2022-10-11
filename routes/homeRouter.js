const { createUser, login, updateUser, deleteUser, getAllProducts, searching, getSearch, getUser, productInfo} = require("../controllers/customerController");
const validate = require("../middleware/validdate");
const registerUserSchema = require("../schema/userSchema");
const multer  = require('multer-upgrade');
const { $where } = require("../models/customerModel");
const config = require("../config");
const {
    createProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/productController");
const {  staffLogin,
    getStaff,} = require("../controllers/staffController");
const homeRouter = (app) =>  {
    app.route("/").get(getAllProducts);
    app.route("/User").get(getUser);
    app.route("/search").get(getSearch);
    app.route("/register").post(validate(registerUserSchema), createUser);
    app.route("/login").post(login);
    app.route("/update").post(updateUser);
    app.route("/delete").post(deleteUser);
    app.route("/all-product").get(getAllProducts);
    app.route("/searching").post(searching);
    app.route("/upload").post(uploadMulter.any(), upload);
    app.route("/preview/:key").get((req,res) => {
        res.sendFile(`/${req.params.key}`, {
          root: "temp",
          headers: {
              'Content-Type': 'image/png',
          }
        })
      });
    app.route("/staffLogin").post(staffLogin);
    app.route("/profile").get(getStaff);
    app.route("/addProduct").post(createProduct);
    app.route("/updateProduct").post(updateProduct);
    app.route("/deleteProduct").post(deleteProduct);
    app.route("/all-product/:_id").get(productInfo);
}



const upload = async (req, res) => {
    const files = req.files;
    console.log('upload file:', files);
    if (!files.length) {
      return res.error('402009');
    }
    const file = files[0];
    let filePath = '';
    if (file.fieldname === 'upload') {
      filePath = `${config.baseUrl}/preview/${file.filename}`;
    } else {
      res.status(401).json('402009');
    }
    res.status(200).json({ name: file.originalname.filename, url: filePath });
  };
  


  
  const uploadMulter = multer({
    dest: 'temp/',
    // fileFilter: (req, file, cb) => {
    //   const fieldname = file.fieldname;
    //   console.log("filles",fieldname)
    //   if (fieldname === 'avatar') {
    //     if (!['image/png', 'image/jpg', 'image/jpeg'].includes(file.originalname.mimeType)) {
    //       cb({ message: '只允png/jpg/jpeg三种格式图片上传', code: '402010' });
    //     }
    //   }
    //   cb(null, true);
    // }
  });

module.exports = homeRouter;