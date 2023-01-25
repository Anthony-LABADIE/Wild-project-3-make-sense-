const express = require("express");

const AuthorisationUserDecisionRouter = express.Router();

const authorizationDecisionUserController = require("../controllers/authorizationDecisionUserController");

AuthorisationUserDecisionRouter.get(
  "/:id",
  authorizationDecisionUserController.getDecisionUser
);

AuthorisationUserDecisionRouter.get(
  "/notification/:id",
  authorizationDecisionUserController.countDecision
);

AuthorisationUserDecisionRouter.get(
  "/six/:id/",
  authorizationDecisionUserController.getSixDecisions
);

AuthorisationUserDecisionRouter.get(
  "/notification/detail/:id",
  authorizationDecisionUserController.getDecisionUserNotif
);

module.exports = AuthorisationUserDecisionRouter;
