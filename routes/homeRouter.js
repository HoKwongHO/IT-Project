const { createUser, login, updateUser, deleteUser, getAllProducts, searching, getSearch, getUser } = require("../controllers/user.controller");
const validate = require("../middleware/validdate");
const registerUserSchema = require("../schema/user.schema");

const homeRouter = (app) =>  {
    app.route("/User").get(getUser);
    app.route("/search").get(getSearch);
    app.route("/register").post(validate(registerUserSchema), createUser);
    app.route("/login").post(login);
    app.route("/update").post(updateUser);
    app.route("/delete").post(deleteUser);
    app.route("/all-product").get(getAllProducts);
    app.route("/getUser").post(searching);
    
    // app.route("/patient_info/:_id"),get(productInfo);
}

module.exports = homeRouter;