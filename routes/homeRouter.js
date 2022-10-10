const {
  createUser,
  login,
  updateUser,
  deleteUser,
  getAllProducts,
  searching,
  getSearch,
  getUser,
} = require("../controllers/user.controller");
const validate = require("../middleware/validdate");
const registerUserSchema = require("../schema/userSchema");
const {
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { staffLogin, getStaff } = require("../controllers/staffController");
const { authUser, authRole } = require("../basicAuth");
const homeRouter = (app) => {
  app.route("/User").get(getUser);
  app.route("/search").get(getSearch);
  app.route("/register").post(validate(registerUserSchema), createUser);
  app.route("/login").post(login);
  app.route("/update").post(updateUser);
  app.route("/delete").post(deleteUser);
  app.route("/all-product").get(getAllProducts);
  app.route("/getUser").post(searching);
  // staff routes
  app.route("/staffLogin").post(staffLogin);
  app.route("/staffProfile").get(getStaff);
  app.route("/addProduct").post(createProduct);
  app.route("/updateProduct").post(updateProduct);
  app.route("/deleteProduct").post(deleteProduct);
};

module.exports = homeRouter;
