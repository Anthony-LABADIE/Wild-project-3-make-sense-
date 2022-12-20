const { promise } = require("../../config");
const database = require("../../config");

const findAll = () => {
  return database
    .promise()
    .query("SELECT * FROM authorization")
    .then(([res]) => res);
};

const findOne = (id) => {
  return database
    .promise()
    .query("SELECT * FROM authorization WHERE id = ?", [Number(id)])
    .then(([res]) => res);
};

const createOne = (payload) => {
  console.log(payload);
  return database
    .promise()
    .query("INSERT INTO authorization SET ?", [payload])
    .then(([res]) => res);
};
const deleteOne = (id) => {
  return database
    .promise()
    .query("DELETE from authorization WHERE id = ?", [Number(id)])
    .then(([res]) => res);
};
const putOne = (payload, id) => {
  return database
    .promise()
    .query("UPDATE authorization  SET ? WHERE id = ?", [payload, Number(id)])
    .then(([res]) => res);
};

module.exports = { findAll, createOne, findOne, deleteOne, putOne };
