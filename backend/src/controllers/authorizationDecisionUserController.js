/* eslint-disable camelcase */
const authorizationDecisionUserModel = require("../models/authorizationDecisionUserModel");

const authorizationDecisionUserController = {
  getDecisionUser: (req, res) => {
    const { id } = req.params;
    authorizationDecisionUserModel
      .findAllDecision(id)
      .then((decision) => res.send(decision))
      .catch((err) => res.send(err));
  },
};
module.exports = authorizationDecisionUserController;
