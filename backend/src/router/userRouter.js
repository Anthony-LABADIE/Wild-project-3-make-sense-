const express = require("express");

const userRouter = express.Router();

const userController = require("../controllers/userControllers");

userRouter.get("/", userController.getUsers);

module.exports = userRouter;
