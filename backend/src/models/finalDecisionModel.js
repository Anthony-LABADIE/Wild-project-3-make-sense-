const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM finaldecision")
    .then(([decision]) => decision);
};
const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM finaldecision WHERE id = ?", [Number(id)])
    .then(([res]) => res);
};
const createOne = (payload) => {
  return db
    .promise()
    .query("INSERT INTO finaldecision SET ?", [payload])
    .then(([res]) => res);
};
const deleteOne = (id) => {
  return db
    .promise()
    .query("DELETE FROM finaldecision WHERE id = ?", [id])
    .then(([res]) => res);
};
const updateOne = (decisionData, id) => {
  return db
    .promise()
    .query("UPDATE finaldecision SET ? Where id = ?", [decisionData, id])
    .then(([res]) => res);
};
module.exports = { findAll, findOne, createOne, updateOne, deleteOne };
