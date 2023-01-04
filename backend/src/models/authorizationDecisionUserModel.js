/* eslint-disable camelcase */
const db = require("../../config");

const findAllDecision = (id) => {
  return db
    .promise()
    .query(
      "SELECT * FROM decision INNER JOIN authorization ON decision.id = authorization.id_decision INNER JOIN user  ON user.id = authorization.id_user INNER JOIN status ON decision.id_status = status.id  WHERE user.id=?",
      [id]
    )
    .then(([decision]) => decision);
};

module.exports = { findAllDecision };
