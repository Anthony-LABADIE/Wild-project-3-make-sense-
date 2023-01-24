/* eslint-disable camelcase */
const authorizationDecisionUserModel = require("../models/authorizationDecisionUserModel");

const authorizationDecisionUserController = {
  getThreeDecision: (req, res) => {
    const { id } = req.params;
    authorizationDecisionUserModel
      .findthree(id)
      .then((decision) => res.send(decision))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  getDecisionUser: (req, res) => {
    const { id } = req.params;
    authorizationDecisionUserModel
      .findAllDecision(id)
      .then((decision) => res.send(decision))
      .catch((err) => res.send(err));
  },

  countDecision: (req, res) => {
    const { id } = req.params;
    authorizationDecisionUserModel
      .countNotifcation(id)
      .then((authorizations) => res.send(authorizations))
      .catch((err) => res.send(err));
  },

  getDecisionUserNotif: (req, res) => {
    const { id } = req.params;
    authorizationDecisionUserModel
      .findAllDecisionNotification(id)
      .then((authorizations) => res.send(authorizations))
      .catch((err) => res.send(err));
  },
};
module.exports = authorizationDecisionUserController;
