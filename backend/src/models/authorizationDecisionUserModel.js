/* eslint-disable camelcase */
const db = require("../../config");

const findthree = (id) => {
  return db
    .promise()
    .query(
      "SELECT  decision.title,us2.id, us2.image, us1.id, us2.lastname, us2.firstname, status FROM decision  INNER JOIN authorization ON decision.id = authorization.id_decision INNER JOIN user AS us1 ON us1.id = authorization.id_user INNER JOIN status ON decision.id_status = status.id INNER JOIN user AS us2 on us2.id = decision.id_user  WHERE us1.id=? LIMIT 3; ",
      [id]
    )
    .then(([decision]) => decision);
};

const findAllDecision = (id) => {
  return db
    .promise()
    .query(
      "SELECT  decision.title,us2.id, us1.id, us2.lastname, us2.firstname, status FROM decision  INNER JOIN authorization ON decision.id = authorization.id_decision INNER JOIN user AS us1 ON us1.id = authorization.id_user INNER JOIN status ON decision.id_status = status.id INNER JOIN user AS us2 on us2.id = decision.id_user  WHERE us1.id=? LIMIT 3;",
      [id]
    )
    .then(([decision]) => decision);
};

module.exports = { findthree, findAllDecision };
