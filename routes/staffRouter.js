const validate = require("../middleware/validdate");
const auth = require("../controllers/login"); 
const {
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { login, getStaff } = require("../controllers/staffController");
const productRouter = (app) => {
  app.route("/staffLogin").post(login);
  app.route("/profile").get(getStaff, auth.isLoginStaff);
  app.route("/addProduct").post(createProduct, auth.isLoginStaff);
  app.route("/updateProduct").post(updateProduct, auth.isLoginStaff);
  app.route("/deleteProduct").post(deleteProduct, auth.isLoginStaff);

  // app.route("/patient_info/:_id"),get(productInfo);
};

module.exports = productRouter;