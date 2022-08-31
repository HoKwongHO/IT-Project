const { createUser, login, updateUser, deleteUser } = require("../controllers/user.controller");
const validate = require("../middleware/validdate");
const registerUserSchema = require("../schema/user.schema");

const routeHandler = (app) =>  {
    app.route("/register").post(validate(registerUserSchema), createUser);
    app.route("/login").post(login);
    app.route("/update").post(updateUser);
    app.route("/delete").post(deleteUser);
}

module.exports = routeHandler;