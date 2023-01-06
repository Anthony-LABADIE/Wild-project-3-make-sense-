const express = require("express");

const AuthorisationUserDecisionRouter = express.Router();

const authorizationDecisionUserController = require("../controllers/authorizationDecisionUserController");

AuthorisationUserDecisionRouter.get(
  "/:id",
  authorizationDecisionUserController.getDecisionUser
);

AuthorisationUserDecisionRouter.get(
  "/three/:id/",
  authorizationDecisionUserController.getThreeDecision
);

module.exports = AuthorisationUserDecisionRouter;
