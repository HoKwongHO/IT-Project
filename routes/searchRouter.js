const cartController = require("../controllers/cartController");
const customerController = require("../controllers/customerController");
const router = require("express").Router();

router.post("/", customerController.searching);
router.get("/_id", customerController.productInfo);
router.post("/_id", cartController.addItemToCart);

module.exports = searchRouter;