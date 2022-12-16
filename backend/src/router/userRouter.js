const express = require("express");

const userRouter = express.Router();

const userController = require("../controllers/userControllers");
const userValidationMiddleware = require("../middleware/validator");
const emailAlreadyExistsMiddleware = require("../middleware/emailAlreadyExist");
const credentialsCheck = require("../middleware/credentialsCheck");

userRouter.get("/", userController.getUsers);
userRouter.get("/:id", userController.getOneUSer);
userRouter.post(
  "/",
  emailAlreadyExistsMiddleware,
  userValidationMiddleware,
  credentialsCheck,
  userController.createUser
);

userRouter.post("/login", credentialsCheck, userController.login);

module.exports = userRouter;
