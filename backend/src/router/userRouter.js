const express = require("express");

const userRouter = express.Router();

const userController = require("../controllers/userControllers");

const userValidationMiddleware = require("../middleware/validator");
const emailAlreadyExistsMiddleware = require("../middleware/emailAlreadyExist");

userRouter.get("/", userController.getUsers);
userRouter.get("/:id", userController.getOneUSer);
userRouter.post(
  "/",
  emailAlreadyExistsMiddleware,
  userValidationMiddleware,
  userController.createUser
);

module.exports = userRouter;
