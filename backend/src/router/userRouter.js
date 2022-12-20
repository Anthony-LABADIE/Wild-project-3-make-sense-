const express = require("express");

const userRouter = express.Router();

const userController = require("../controllers/userControllers");
const userValidationMiddleware = require("../middleware/validator");
const emailAlreadyExistsMiddleware = require("../middleware/emailAlreadyExist");
const credentialsCheck = require("../middleware/credentialsCheck");
const authorization = require("../helpers/authentification");

userRouter.get("/", userController.getUsers);
userRouter.get("/:id", userController.getOneUSer);
userRouter.get("/logout", authorization, userController.logout);
userRouter.post(
  "/",
  emailAlreadyExistsMiddleware,
  userValidationMiddleware,
  credentialsCheck,
  userController.createUser
);

userRouter.post("/login", credentialsCheck, userController.login);
userRouter.delete("/:id", userController.deleteUser);
userRouter.put("/:id", userController.updateUser);

module.exports = userRouter;
