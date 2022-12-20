const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM conflict")
    .then(([conflict]) => conflict);
};
const createOne = (payload) => {
  return db
    .promise()
    .query("INSERT INTO conflict SET ?", [payload])
    .then(([conflict]) => conflict);
};
const deleteOne = (id) => {
  return db
    .promise()
    .query("DELETE FROM conflict WHERE id = ?", [id])
    .then(([res]) => res);
};
const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM conflict WHERE id = ?", [Number(id)])
    .then(([res]) => res);
};

const updateOne = (conflictData, id) => {
  return db
    .promise()
    .query("UPDATE conflict SET ? WHERE id = ?", [conflictData, id])
    .then(([res]) => res);
};
module.exports = { findAll, createOne, deleteOne, findOne, updateOne };
