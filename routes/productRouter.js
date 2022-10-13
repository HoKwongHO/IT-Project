const cartController = require("../controllers/cartController");
const customerController = require("../controllers/customerController");
const router = require("express").Router();

router.get("/", customerController.getAllProducts);
router.get("/_id", customerController.productInfo);
router.post("/_id", cartController.addItemToCart);

module.exports = productRouter;