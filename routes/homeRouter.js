const express = require("express");
const controller = require("../controllers/homeController.js");

const homeRouter = express.Router();

homeRouter.get("/", controller.getHome);
module.exports = homeRouter;