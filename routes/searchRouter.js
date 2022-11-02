const cartController = require("../controllers/cartController");
const customerController = require("../controllers/customerController");
const searchRouter = require("express").Router();

searchRouter.post("/", customerController.searching);
searchRouter.get("/_id", customerController.productInfo);
searchRouter.post("/_id", cartController.addItemToCart);

module.exports = searchRouter;