const db = require("../../config");

const findthree = () => {
  return db
    .promise()
    .query(
      "SELECT * FROM decision INNER JOIN user ON user.id = decision.id_user  LIMIT 3"
    )
    .then(([decision]) => decision);
};

const findAll = () => {
  return db
    .promise()
    .query(
      "SELECT * FROM decision INNER JOIN user ON user.id = decision.id_user "
    )
    .then(([decision]) => decision);
};
const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM decision WHERE id = ?", [Number(id)])
    .then(([res]) => res);
};
const createOne = (payload) => {
  return db
    .promise()
    .query("INSERT INTO decision SET ?", [payload])
    .then(([res]) => res);
};
const deleteOne = (id) => {
  return db
    .promise()
    .query("DELETE FROM decision WHERE id = ?", [id])
    .then(([res]) => res);
};
const updateOne = (decisionData, id) => {
  return db
    .promise()
    .query("UPDATE decision SET ? Where id = ?", [decisionData, id])
    .then(([res]) => res);
};
module.exports = {
  findthree,
  findAll,
  findOne,
  createOne,
  updateOne,
  deleteOne,
};
