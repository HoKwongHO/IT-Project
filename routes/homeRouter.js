const { createUser, login, updateUser, deleteUser, getAllProducts, searching, productInfo} = require("../controllers/customerController");
const validate = require("../middleware/validdate");
const registerUserSchema = require("../schema/userSchema");
const multer  = require('multer-upgrade');
const { $where } = require("../models/customerModel");
const config = require("../config");
const cartRouter = require("./cartRouter");
const searchRouter = require("./searchRouter");
const productRouter = require("./productRouter");
const auth = require("../controllers/login"); // Check whether login, or has no authority
//const staffRouter = require("./staffRouter");

const passport = require('passport')
require('../passport')(passport)

const {
    createProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/productController");
const {  staffLogin,
    getStaff,} = require("../controllers/staffController");
const homeRouter = (app) =>  {
    // app.route("/").get(getAllProducts);
    // app.route("/User").get(getUser);
    // app.route("/search").get(getSearch);
    app.route("/register").post(validate(registerUserSchema), createUser);
    app.route("/login").post(passport.authenticate('customer_login',{
      successRedirect: "/",
      failureRedirect: "/login",
      failureFlash: true}));
    app.route("/stafflogin").post(passport.authenticate('staff_login',{
      successRedirect: "/all-product",
      failureRedirect: "/stafflogin",
      failureFlash: true}));
    app.route("/stafflogin").post(passport.authenticate('staff_login',{
      successRedirect: "/",
      failureRedirect: "/stafflogin",
      failureFlash: true}));
    app.use("/collection-cart", cartRouter, auth.isLoginCustomer);
    app.route("/update").post(updateUser);
    app.route("/delete").post(deleteUser);
    app.use("/all-product", productRouter, auth.isLoginCustomer);
    //app.route("/all-product").get(getAllProducts);
    app.use("/searching", searchRouter);
    //app.route("/searching/:_id").get(productInfo);
    app.route("/upload").post(uploadMulter.any(), upload);
    app.route("/preview/:key").get((req,res) => {
        res.sendFile(`/${req.params.key}`, {
          root: "temp",
          headers: {
              'Content-Type': 'image/png',
          }
        })
      });
    // app.route("/stafflogin").post(passport.authenticate('staff_login',{
    //   successRedirect: "/",
    //   failureRedirect: "/stafflogin",
    //   failureFlash: true}));
    app.route("/profile").get(getStaff, auth.isLoginStaff);
    app.route("/addProduct").post(createProduct, auth.isLoginStaff);
    app.route("/updateProduct").post(updateProduct, auth.isLoginStaff);
    app.route("/deleteProduct").post(deleteProduct, auth.isLoginStaff);
    app.route("/all-product/:_id").get(productInfo, auth.isLoginStaff);
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