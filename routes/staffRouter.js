const validate = require("../middleware/validdate");
const {
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { staffLogin, getStaff } = require("../controllers/staffController");
const passport = require("passport");
const staffRouter = (app) => {
  app.route("/staffLogin").post(staffLogin);
  app.route("/staffProfile").get(getStaff);
  app.route("/addProduct").post(createProduct);
  app.route("/updateProduct").post(updateProduct);
  app.route("/deleteProduct").post(deleteProduct);

  // app.route("/patient_info/:_id"),get(productInfo);
};

module.exports = staffRouter;
