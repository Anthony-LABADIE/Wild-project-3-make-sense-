/* eslint-disable camelcase */
const db = require("../../config");

const findOneDecision = (id) => {
  return db
    .promise()
    .query(
      "SELECT title, content, deadline, contexte, profit, usefullness, inconvenience, id_user, date_posted, id_status FROM decision LEFT JOIN user ON user.id=decision.id_user WHERE user.id = ?",
      [id]
    )
    .then(([decision]) => decision);
};
module.exports = { findOneDecision };
