const cartController = require("../controllers/cartController")
const cartRouter = require("express").Router()

cartRouter.get("/", cartController.fetchCart)
//router.post("/", cartController.addItemToCart)//Not sure whether to put here or put in products detail page
cartRouter.post("/remove-item", cartController.removeItemFromCart)

module.exports = cartRouter;