const express = require("express");

const AuthorisationUserDecisionRouter = express.Router();

const authorizationDecisionUserController = require("../controllers/authorizationDecisionUserController");

AuthorisationUserDecisionRouter.get(
  "/:id",
  authorizationDecisionUserController.getDecisionUser
);

AuthorisationUserDecisionRouter.get(
  "/single/:id/:user",
  authorizationDecisionUserController.getFindOne
);

AuthorisationUserDecisionRouter.get(
  "/notification/:id",
  authorizationDecisionUserController.countDecision
);

AuthorisationUserDecisionRouter.get(
  "/three/:id/",
  authorizationDecisionUserController.getThreeDecision
);

AuthorisationUserDecisionRouter.get(
  "/notification/detail/:id",
  authorizationDecisionUserController.getDecisionUserNotif
);

module.exports = AuthorisationUserDecisionRouter;
