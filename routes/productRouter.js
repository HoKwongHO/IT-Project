const cartController = require("../controllers/cartController");
const customerController = require("../controllers/customerController");
const productRouter = require("express").Router();

productRouter.get("/", customerController.getAllProducts);
productRouter.get("/_id", customerController.productInfo);
productRouter.post("/_id", cartController.addItemToCart);

module.exports = productRouter;