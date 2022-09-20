const { createUser, login, updateUser, deleteUser, getAllProducts, getSearch, getAllItems, searching,
     getUser } = require("../controllers/customerController");
const validate = require("../middleware/validdate");
const registerUserSchema = require("../schema/userSchema");

const homeRouter = (app) =>  {
    app.route("/User").get(getUser);
    app.route("/search").get(getSearch);
    app.route("/register").post(validate(registerUserSchema), createUser);
    app.route("/login").post(login);
    app.route("/update").post(updateUser);
    app.route("/delete").post(deleteUser);
    app.route("/allProduct").get(getAllProducts);
    app.route("/getAllItem").get(getAllItems);
    app.route("/getSearchedProduct").post(searching);
    app.route("/getAllItem/:_id").get(getSingleProduct);
    
    // app.route("/patient_info/:_id"),get(productInfo);
}

module.exports = homeRouter;