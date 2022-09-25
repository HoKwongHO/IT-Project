const validate = require("../middleware/validdate");
const {
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { login, getStaff } = require("../controllers/staffController");
const productRouter = (app) => {
  app.route("/staffLogin").post(login);
  app.route("/profile").get(getStaff);
  app.route("/addProduct").post(createProduct);
  app.route("/updateProduct").post(updateProduct);
  app.route("/deleteProduct").post(deleteProduct);

  // app.route("/patient_info/:_id"),get(productInfo);
};

module.exports = productRouter;
