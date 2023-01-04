const express = require("express");

const AuthorisationUserDecisionRouter = express.Router();

const authorizationDecisionUserController = require("../controllers/authorizationDecisionUserController");

AuthorisationUserDecisionRouter.get(
  "/:id",
  authorizationDecisionUserController.getDecisionUser
);

module.exports = AuthorisationUserDecisionRouter;
