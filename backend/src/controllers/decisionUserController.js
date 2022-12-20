/* eslint-disable camelcase */
const decisionUserModel = require("../models/decisionUserModels");

const decisionUserController = {
  getDecisionUser: (req, res) => {
    const { id } = req.params;
    decisionUserModel
      .findOneDecision(id)
      .then((decision) => res.send(decision))
      .catch((err) => res.send(err));
  },
};
module.exports = decisionUserController;
