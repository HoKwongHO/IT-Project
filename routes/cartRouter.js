const cartController = require("../controllers/cartController")
const router = require("express").Router()

router.get("/", cartController.fetchCart)
//router.post("/", cartController.addItemToCart)//Not sure whether to put here or put in products detail page
router.delete("/remove-item", cartController.removeItemFromCart)

module.exports = cartRouter